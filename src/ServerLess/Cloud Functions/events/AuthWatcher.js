const { functions, admin } = require('../config');
const Users = admin.firestore().collection('users');
const Posts = admin.firestore().collection('posts');


exports.onDeleteAccounts = functions.auth.user().onDelete(async snap=>{
  const uid = snap.uid;
  return await Promise.all([
    Users.doc(uid).delete(),
    Posts.where('autor.uid', '==', uid).get().then(posts=>posts.forEach(post=>post.ref.delete())),
  ]);
});