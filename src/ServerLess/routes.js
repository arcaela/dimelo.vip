import firebase from '../config/firebase'
import CollectionsUsers from './Collections/Users';

const routes = {
    auth:{
        signUp: async ({email, password, ...props})=>firebase.auth().createUserWithEmailAndPassword(email, password).then(
            ({ user:{ providerData, uid} })=>{
                const client={ ...providerData[0], email, ...props, uid, role:'user', };
                return CollectionsUsers.doc(client.uid).set(client).then(()=>client);
            }),
        signIn: async ({email, password, remember=false})=>
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']).then(
                ()=>firebase.auth().signInWithEmailAndPassword(email, password).then(
                    ({user :{ uid } })=>CollectionsUsers.doc(uid).get().then(snap=>snap.data()))),
        signOut: async (callback=()=>{})=>firebase.auth().signOut().then(callback),
    },

    news:{},

};

export default routes;