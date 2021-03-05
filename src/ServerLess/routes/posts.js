import { scopes, firebase } from '~/ServerLess';



const posts = {
    async recents({ user, posts=[] }){
        if(!user) return [];
        let query = scopes.posts.orderBy('id', 'desc');
        if(posts.length) query = query.startAfter( posts.slice(-1)[0].$doc.id );
        return (await query.limit(2).get()).docs.map(e=>e.data());
    },
    async delete({ user, id }){ return scopes.posts.doc(id).delete(); },
    async put({ id=null, ...post }){
        const media = [];
        const doc = id?scopes.posts.doc( id ):scopes.posts.doc();
        const folder = firebase.storage().ref(`posts/${doc.id}/media/`);
        for(const picture of post.media)
            media.push( await (await folder.child(`/${ Date.now() }`).put(picture)).ref.getDownloadURL())
        await doc.set({ ...post, media, id:doc.id, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
        return (await doc.get()).data();
    },
};


export { posts };