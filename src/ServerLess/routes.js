import firebase from '../config/firebase'
import { $store } from './Hooks/useAuth';
import Users from './Collections/Users';
import Posts from './Collections/Posts';


const routes = {
    auth:{
        me:async ()=>$store.user,
        async signUp({ email, password, ...props }){
            const {user:{providerData,uid}} = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const client={ ...providerData[0], email, ...props, uid, rol:2, };
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
        async all({user, ...props}){
            if(!user) return [];
            const snap = await Posts
                // .where('rol', 'in', ['all', '2'])
                // .where('perfil', 'in', ['all', user.patron])
                // .where('localidad', 'in', ['all', user.voting_mun])
                .get();
            return snap.docs.map(e=>e.data());
        },
        async create({media=[], ...post}){
            const urls = [];
            const doc = Posts.doc();
            const folder = firebase.storage().ref(`posts/media/${doc.id}`);
            for(let i=0;i<media.length;i++)
                urls.push( (await folder.put(media[i])).ref.getDownloadURL() )
            const data = { ...post, id:doc.id, media:urls.flat(), };
            await doc.set(data);
            return data;
        },
    },
};

export default routes;