const { firebase } = require('~/ServerLess');

/* Scopes */
module.exports = Object.entries({
    users:require('./Users').default,
    posts:require('./Posts').default,
}).reduce((scopes, [key, ScopeClass])=>({
    ...scopes,
    [key]:firebase.firestore().collection(key).withConverter({
        fromFirestore:(snap,options)=>new ScopeClass({snap, options}),
        toFirestore(_class) { return (_class instanceof ScopeClass)?_class.toJSON():_class; },
    })
}),{})