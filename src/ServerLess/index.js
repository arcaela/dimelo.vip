import firebase from './config/firebase'
export * as useAuth from './hooks/useAuth'
export * as useGetter from './hooks/useGetter'
export * as useInputs from './hooks/useInputs'

export * as api from './utils/api'
export * as error from './utils/error'
export * as Google from './utils/Google'
export { firebase }






export const slug = path=>(`${path}/`).replace(/\/+/gi,'/').split('/').filter(e=>!!e);
export const reference = path=>{
    const [ col, ...doc] = slug(path);
    const t = firebase.firestore().collection(col);
    return doc.length?t.doc(doc.join('.')):t;
};