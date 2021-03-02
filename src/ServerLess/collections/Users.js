import { set, get, has, merge } from 'lodash'
import firebase from '~/ServerLess/config/firebase'






export const index = 'uid';
export const tableName = 'users';
const Table = firebase.firestore().collection(tableName);
class DataConverter {
    constructor(object){
        Object.defineProperty(this,index,{ enumerable:true, get:()=>object[index],set:()=>object[index] });
        this.$update(object, false);
        return this;
    }
    $data(){return {...this}}
    async $save(){ return Table.doc(this[index]).set({...this}).then(()=>this); }
    async $update(object={}, save=true){ merge(this, {...object}); return save?this.$save():this; }
    $has(path){ return has(this, path); }
    $get(path){ return get(this, path); }
    $set(path, value){ set(this, path, value); return value; }
/* #################################### */





    // $posts(){ return Posts.where('author.uid', '==', this.uid); }
    link(){ return `http://dimelo.vip/signup/${this[index]}`; }
    async $followers(){
        return Table.where('leader', '==', this[index]).get().then(snap=>snap.docs.map(e=>e.data()))
    }
}
export default Table
.withConverter({
    toFirestore(_class) { return (_class instanceof DataConverter)?_class.$data():_class; },
    fromFirestore(snap,options) { return new DataConverter(snap.data(options)); }
});