import firebase from '../config/firebase'
import { get, has } from 'lodash'



export { firebase };
export const users = firebase.firestore().collection('users');
export const routes = {
    auth:{
        signup({ email, password, ...props}){
            try {
                if(password.length<6) throw new Error('password-weak');
                const { user:{ uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password);
                const client =  { uid, email, ...props};
                await users.doc(uid).set(client);
                return client;
            }
            catch (error) { return error.replace('auth/',''); }
        },
        signin({email, password, remember=false}){
            try {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[remember?'LOCAL':'SESSION']);
                return firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(user=>users.doc(user.uid).get());
            }
            catch (error) { return error.replace('auth/',''); }
        },
    },


};


export default function api(path, props){
    path = path.replace(/(\/|\.)+/gi,'.').replace(/^\.?(.*)\.?$/gi, "$1").toLowerCase();
    return has(routes, path)?get(routes,path)(props):Promise.reject({code:404,message:'NOT_FOUND'});
}