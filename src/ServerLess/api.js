import firebase from '../config/firebase'
import { get, has } from 'lodash'
import pathToRegex from 'path-to-regex';



export { firebase };
export const users = firebase.firestore().collection('users');
export const routes = {
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
        ':id':async ({ id })=>{

        },



    },
};


const _routes = (object, prepend='')=>Object.entries(object).reduce((paths, [path, fn])=>paths.concat(...(
    (typeof fn==='object') ? _routes(fn, path) : [`${prepend}/${path}`]
)),[]);
const listRoutes = _routes(routes).map(path=>({
    key:path.replace(/\//gi,'.'),
    match:new pathToRegex(path),
}));



console.log(listRoutes);


export default function api(path, props){
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^\.?(.*)\.?$/gi, "$1").toLowerCase();
    

    if(path.indexOf('.')<0) path += '.$default';

    return has(routes, path)?get(routes,path)(props):Promise.reject({code:404,message:'NOT_FOUND'});
}