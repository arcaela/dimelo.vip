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




    async $followers(){ return (await Table.where('leader', '==', this[index]).get()).docs.map(e=>e.data()); }
    // $posts(){ return Posts.where('author.uid', '==', this.uid); }
    // async $invite(...emails){
    //     emails = emails.flat().filter(email=>email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi));
    //     if(!emails.length) throw { message:"At least one email is required", code:0 };
    //     return Invitations.doc().set({ uid:this.uid, emails, }).then(()=>emails);
    // }
}
export default Table
.withConverter({
    toFirestore(_class) { return _class.$data(); },
    fromFirestore(snap,options) { return new DataConverter(snap.data(options)); }
});