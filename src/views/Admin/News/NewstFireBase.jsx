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
            return news.docs.map( (e) => e.data() )
        } catch (error) {
            console.log(error);
        }
    }

}

const newsFireBase = new NewsFireBase();

export default newsFireBase