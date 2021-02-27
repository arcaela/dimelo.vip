const { functions, admin } = require('../config');


const Users = admin.firestore().collection('users');
const Posts = admin.firestore().collection('posts');
const Leaders = admin.firestore().collection('leaders');



exports.onCreateAccounts = functions.auth.user().onCreate(async snap=>{
  const uid = snap.uid;
  const ref = await Users.doc(uid).get();
  let exists = ref.exists;
  if(!exists){
    await ref.ref.set({
      uid,
      rol:2,
      locked:true,
      email:snap.email,
      fullname:'Jhon Doe',
      birthday:'01/01/1970',
      dni:uid,
      address:{
        string:'Colombia',
        maps:{},
      },
      phone:null,
      movil:123456789,
      leader:71779276,
      family:{ adults:1, partners:0, },
      voting:{ departament:null, municipality:null, point:null, table:null, },
    });
  }
  const user = (await ref.ref.get()).data();
  const isLeader = exists
    ?!(await Leaders.where('cedula', '==', user.dni).limit(1).get()).empty
    :false;
  return ref.ref.update({ rol:user.dni===71779276?0:(isLeader?1:2), });
});


exports.onDeleteAccounts = functions.auth.user().onDelete(async snap=>{
  const uid = snap.uid;
  return await Promise.all([
    Users.doc(uid).delete(),
    Posts.where('autor.uid', '==', uid).get().then(posts=>posts.forEach(post=>post.ref.delete())),
  ]);
});