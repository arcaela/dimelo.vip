import { set, get, has, merge } from 'lodash'
import firebase from '~/ServerLess/config/firebase'






export const index = 'id';
export const tableName = 'posts';
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



}
export default Table
.withConverter({
    toFirestore(_class) { return _class.$data(); },
    fromFirestore(snap,options) { return new DataConverter(snap.data(options)); }
});