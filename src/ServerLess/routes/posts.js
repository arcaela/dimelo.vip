import { scopes, firebase } from '~/ServerLess';



const posts = {
    async recents({ user, after=null }){
        if(!user) return [];
        after = after && ((Array.isArray(after)?after.slice(-1)[0]:after)?.$doc);
        let query = scopes.posts.orderBy('timestamp');
        if(after) query = query.startAfter(after);
        return (await query.limit(2).get()).docs.map(e=>e.data());
    },
    async delete({ id }){ return scopes.posts.doc(id).delete(); },
    async put(post){
        const media = [];
        const doc = scopes.posts.doc();
        const folder = firebase.storage().ref(`posts/${doc.id}/media/`);
        for(const picture of post.media)
            media.push( await (await folder.child(`/${ Date.now() }`).put(picture)).ref.getDownloadURL())
        await doc.set({ ...post, media, id:doc.id, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
        return (await doc.get()).data();
    },
};


export { posts };