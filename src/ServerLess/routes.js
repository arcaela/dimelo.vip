import firebase from '../config/firebase'
import { $store } from './Hooks/useAuth';
import Users from './Collections/Users';
import Posts from './Collections/Posts';
import { create } from 'lodash';


const routes = {
    auth:{
        me:async ()=>$store.user,
        async signUp({ email, password, ...props }){
            const {user:{providerData,uid}} = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const client={ ...providerData[0], email, ...props, uid, role:'user', };
            await Users.doc(client.uid).set(client);
            return client;
        },
        signIn: async ({email, password, remember=false})=>{
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']);
            const {user:{uid}} = await firebase.auth().signInWithEmailAndPassword(email, password);
            return Users.doc(uid).get().then(snap=>snap.data());
        },
        signOut: async (callback=()=>{})=>firebase.auth().signOut().then(callback),
    },
    posts:{
        async all({user, page=1, perPage=20, ...props}){
            if(!user) return [];
            // const query = Posts
            //     .where('role', 'in', ['all', user.role])
            //     .where('perfil', 'in', ['all', user.patron])
            //     .where('municipio', 'in', ['all', user.voting_mun])
            //     .startAt()
            // const auth = await auth();
            console.log($store.user);
        },
        async create(_post_){


        },
    },
};

export default routes;