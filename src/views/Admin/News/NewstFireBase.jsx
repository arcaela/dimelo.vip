import app from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

class NewsFireBase {

    constructor() {
        this.db = app.firestore()
        this.storage = app.storage()
        this.posts = this.db.collection('posts')
        this.imagesRef = this.storage.ref("posts/images")
    }

    async addNews(news){
        try {
            return await this.posts.add(news)
        } catch (error) {
            return error
        }
    }

    async addNewsById(id){
        try {
            return await this.posts.doc(id).get();
        } catch (error) {
            return error
        }
    }

    async updateNews(id, update){
        try {
            return await this.posts.doc(id).update(update);
        } catch (e) {
            return e
        }
    }

    getImagenRef(){
        return this.imagesRef;
    }

    async getNews(){
        try {
            const news = await this.posts.get()
            return news.docs.map( (e) =>  Object.assign(e.data(), { id: e.id }) )
        } catch (error) {
            return error
        }
    }

    async deleteNews(id){
        try {
            const deleteDoc = await this.posts.doc(id).delete()
            console.log(deleteDoc)
        } catch (error) {
            
        }
    }

}

const newsFireBase = new NewsFireBase();

export default newsFireBase