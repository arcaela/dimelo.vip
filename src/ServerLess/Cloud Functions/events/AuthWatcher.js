const { functions, admin } = require('../config');


const Users = admin.firestore().collection('users');
const Posts = admin.firestore().collection('posts');
// const Leaders = admin.firestore().collection('leaders');



exports.onCreateAccounts = functions.auth.user().onCreate(async snap=>{
  const uid = snap.uid;
  const ref = Users.doc(uid);
  const data = await ref.get();
  const model = !data.exists && {
    uid,
    rol:2,
    locked:false,
    leader:uid,
    fullname:'Jhon Doe',
    email:snap.email,
    cedula:uid,
    birthday:'01/01/1970',
    movil:null,
    phone:null,
    address:{
      string:'Colombia',
      maps:{},
    },
    family:{ adults:1, partners:0, },
    voting:{ departament:null, municipality:null, point:null, table:null, },
    followers:{ size:0, },
  };
  if(model) await ref.set(model);
  return undefined;
});


exports.onDeleteAccounts = functions.auth.user().onDelete(async snap=>{
  const uid = snap.uid;
  return await Promise.all([
    Users.doc(uid).delete(),
    Posts.where('autor.uid', '==', uid).get().then(posts=>posts.forEach(post=>post.ref.delete())),
  ]);
});