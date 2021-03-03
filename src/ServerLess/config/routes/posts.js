import { scopes, firebase } from '~/ServerLess';



const posts = {
    async recents({ user }){
        if(!user) return [];
        return scopes.posts
            .where('title', '!=', null)
            // .where('filters.perfiles', 'array-contains-any', ['all', user?.patron])
            // .where('filters.rol', 'array-contains-any', ['all', user?.rol])
            .get()
            .then(snap=>snap.docs.map(e=>e.data()));
    },
    

    async put({ id=null, ...post }){
        const media = [];
        const doc = scopes.posts.doc( id );
        const folder = firebase.storage().ref(`posts/${doc.id}/media/`);
        for(const picture of post.media)
            media.push( await (await folder.child(`/${ Date.now() }`).put(picture)).ref.getDownloadURL())
        await doc.set({ ...post, media, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
        return (await doc.get()).data();
    },

};


export { posts };