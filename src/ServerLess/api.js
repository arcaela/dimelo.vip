import firebase from '../config/firebase'
import { get, has } from 'lodash'
import pathToRegex from 'path-to-regex';
export { firebase };



export const users = firebase.firestore().collection('users');
export const routes = (function _routes(object, prepend=''){
    return Object.entries(object).reduce((paths, [path, callback])=>(typeof callback==='object')
        ?{...paths, ..._routes(callback, path)}
        :(paths[path=(`${prepend}/${path}`).replace(/\/+/gi,'/').replace(/^\/?(.*)(\/)?/gi,"$1")]={
            path,
            match:(url)=>new pathToRegex(path).match(url),
            callback,
    },paths),{});
})({
    auth:{
        async signup({email, password, ...props}){
            try {
                if(password.length<6) throw new Error('password-weak');
                const { user:{ uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password);
                const client =  { uid, email, ...props};
                await users.doc(uid).set(client);
                return client;
            }
            catch (error) { return error.replace('auth/',''); }
        },
        async signin({email, password, remember=false}){
            try {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[remember?'LOCAL':'SESSION']);
                return firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(user=>users.doc(user.uid).get());
            }
            catch (error) { return error.replace('auth/',''); }
        },
    },
    news:{
        // index(){ },
        async [':id'](props={}){
            return props.id;
        },

    },
});
const routeValues = Object.values(routes);
export default async function api(path, props){
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^(\.|\/)?(.*)(\.|\/)?$/gi, "$2").toLowerCase();
    const route = routeValues.reduce((_ob_, route)=>{
        if(_ob_) return _ob_;
        const params = route.match(path);
        return params?{...route, params}:_ob_;
    },null) || get(routes, `${path}/index`) || {callback:()=>Promise.reject({code:404,message:'NOT_FOUND'})};
    return route.callback(route.params);
}