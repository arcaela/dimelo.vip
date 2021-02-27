import Posts from '~/ServerLess/collections/Posts'
import firebase from '~/ServerLess/config/firebase'

const posts = {
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
};


export { posts };