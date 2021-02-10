import firebase from '../config/firebase'
import CollectionsUsers from './Collections/Users';

const routes = {
    auth:{
        signUp: async ({email, password, ...props})=>firebase.auth().createUserWithEmailAndPassword(email, password).then(
            ({ user })=>{
                const client={ ...user.toJSON(), uid:user.uid, email, role:'user', ...props};
                return CollectionsUsers.doc(client.uid).set(client).then(()=>client);
            }),
        signIn: async ({email, password, remember=false})=>
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']).then(
                ()=>firebase.auth().signInWithEmailAndPassword(email, password).then(
                    ({uid})=>CollectionsUsers.doc(uid).get())),
        signOut: async (callback=()=>{})=>firebase.auth().signOut().then(callback),
    },
};

export default routes;