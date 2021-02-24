import firebase from '../config/firebase'
import { $store } from './Hooks/useAuth';
import Users from './Collections/Users';
import Posts from './Collections/Posts';
import Invitations from './Collections/Invitations';


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

    invitations:{
        async create({ user, emails=[] }){
            emails = emails.flat().filter(email=>email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/));
            if(!emails.length) throw new Error({message:"Tienes emails con formato inválido"});
            const doc = Invitations.doc();
            return doc.set({ referer:user.dni, emails, });
        },
    },


    posts:{
        async all({user}){
            if(!user) return [];
            return (await Posts.limit(1000)
                    .where('title', '!=', 0)
                    .get())
                .docs.map(e=>e.data());
        },
        async create(post){
            const media = [];
            const doc = Posts.doc();
            
            const folder = firebase.storage().ref(`posts/${doc.id}/media/`);
            for(const picture of post.media)
                media.push( await (await folder.child(`/${Date.now()}`).put(picture)).ref.getDownloadURL() )

            const data = { ...post, id:doc.id, media};
            await doc.set(data);
            return data;
        },
    },
};

export default routes;