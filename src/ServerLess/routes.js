import firebase from '../config/firebase'
import CollectionsUsers from './Collections/Users';


const routes = {
    auth:{
        async signUp({ email, password, ...props }){
            const {user:{providerData,uid}} = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const client={ ...providerData[0], email, ...props, uid, role:'user', };
            await CollectionsUsers.doc(client.uid).set(client);
            return client;
        },
        signIn: async ({email, password, remember=false})=>{
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']);
            const {user:{uid}} = await firebase.auth().signInWithEmailAndPassword(email, password);
            return CollectionsUsers.doc(uid).get().then(snap=>snap.data());
        },
        signOut: async (callback=()=>{})=>firebase.auth().signOut().then(callback),
    },

    news:{},

};

export default routes;