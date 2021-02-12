import firebase from '../config/firebase';



const firestore = firebase.firestore();
const _slug = path=>(`${path}/`).replace(/\/+/gi,'/').split('/').filter(e=>!!e);


export const reference = (path='/')=>{
    const [ table, ...doc] = _slug(path);
    const col = firestore.collection(table);
    return doc.length?col.doc(doc.join('/')):col;
};