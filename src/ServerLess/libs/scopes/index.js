import firebase from '~/ServerLess/configs/firebase';
import UserClass from './Users';
import PostClass from './Posts';

/* Scopes */
const scopes = {
    users:firebase.firestore().collection('users').withConverter({
        fromFirestore:(snap,options)=>new UserClass({snap, options}),
        toFirestore(_class) { return (_class instanceof UserClass)?_class.toJSON():_class; },
    }),
    posts:firebase.firestore().collection('posts').withConverter({
        fromFirestore:(snap,options)=>new PostClass({snap, options}),
        toFirestore(_class) { return (_class instanceof PostClass)?_class.toJSON():_class; },
    }),
};

export default scopes;
