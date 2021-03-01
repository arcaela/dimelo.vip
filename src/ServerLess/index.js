import useAuth from './hooks/useAuth';
import useGetter from './hooks/useGetter';
import useInputs from './hooks/useInputs';
import api from './utils/api';
import error from './utils/error';
import Google from './utils/Google';
import firebase from './config/firebase';




export const slug = path=>(`${path}/`).replace(/\/+/gi,'/').split('/').filter(e=>!!e);
export const reference = function(path){
    const [ col, ...doc] = slug(path);
    const t = firebase.firestore().collection(col);
    return doc.length?t.doc(doc.join('.')):t;
};
export {
    useAuth,
    useGetter,
    useInputs,
    api,
    error,
    Google,
    firebase,
}
