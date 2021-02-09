import firebase from '../config/firebase'
import { get } from 'lodash'
import pathToRegex from 'path-to-regex';
export { firebase };

export const users = firebase.firestore().collection('users');
export const routes = (function _routes(object, prepend=''){
    return Object.entries(object).reduce((paths, [path, callback])=>(typeof callback==='object')
        ?{...paths, ..._routes(callback, path)}
        :(paths[path=(`${prepend}/${path}`).replace(/\/+/gi,'/').replace(/^\/?(.*)(\/)?/gi,"$1").toLocaleLowerCase()]={
            path,
            match:(url)=>new pathToRegex(path).match(url),
            callback,
    },paths),{});
})({
    auth:{
        signUp:({email, password, ...props})=>firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user:{uid}})=>{
                const client={ uid, email, ...props};
                return users.doc(uid).set(client).then(()=>client);
            })
            .catch(error=>{ throw new Error(error.replace('auth/',''))}),

        signIn: ({email, password, remember=false})=>firebase.auth()
            .setPersistence(firebase.auth.Auth.Persistence[remember?'LOCAL':'SESSION'])
            .then(firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user=>users.doc(user.uid).get))
            .catch(error=>{ throw new Error(error.replace('auth/',''))}),
    },


});
const routeValues = Object.values(routes);



export default async function api(path='', props){
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^(\.|\/)?(.*)(\.|\/)?$/gi, "$2").toLowerCase();
    const route = routeValues.reduce((_ob_, route)=>{
        if(_ob_) return _ob_;
        const params = route.match(path);
        return params?{...route, params}:_ob_;
    },null) || get(routes, `${path}/index`) || {callback:()=>Promise.reject({code:404,message:'NOT_FOUND'})};
    return route.callback(...[route.params,props].slice(!route.params?1:0));
}