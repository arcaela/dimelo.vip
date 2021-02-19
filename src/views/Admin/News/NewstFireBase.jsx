import app from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

class NewsFireBase {

    constructor() {
        this.db = app.firestore()
        this.storage = app.storage()
        this.news = this.db.collection('news')
        this.imagesRef = this.storage.ref("news/images")
    }

    async addNews(news){
        try {
            return await this.news.add(news)
        } catch (error) {
            return error
        }
    }

    getImagenRef(){
        return this.imagesRef;
    }

    async getNews(){
        try {
            const news = await this.news.get()
            return news.docs.map( (e) =>  Object.assign(e.data(), { id: e.id }) )
        } catch (error) {
            return error
        }
    }

    getNewsRealTime(){
        this.news
        .onSnapshot(function(doc) {
            console.log("Current data: ", doc.docs.map(e => console.log(e.data())));
        });
    }

    async deleteNews(id){
        try {
            const deleteDoc = await this.news.doc(id).delete()
            console.log(deleteDoc)
        } catch (error) {
            
        }
    }

}

const newsFireBase = new NewsFireBase();

export default newsFireBase