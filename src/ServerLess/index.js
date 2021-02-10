import firebase from '../config/firebase';




const firestore = firebase.firestore();
export const reference = (path='/')=>{
    const [ table, ...doc] = (`${path}/`).replace(/\/+/gi,'/').split('/').filter(e=>!!e);
    const col = firestore.collection(table);
    return doc.length?col.doc(doc.join('/')):col;
};