Object.entries({
    useAuth: require('./hooks/useAuth'),
    useGetter: require('./hooks/useGetter'),
    useInputs: require('./hooks/useInputs'),
    api: require('./utils/api'),
    error: require('./utils/error'),
    Google: require('./utils/Google'),
    firebase: require('./config/firebase'),
}).forEach(([mod, prop])=>module.exports[mod]=prop.default);


module.exports.slug = path=>(`${path}/`).replace(/\/+/gi,'/').split('/').filter(e=>!!e);
module.exports.reference = function(path){
    const [ col, ...doc] = this.slug(path);
    const t = this.firebase.firestore().collection(col);
    return doc.length?t.doc(doc.join('.')):t;
};