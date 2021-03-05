const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { functions, mail, admin } = require('../config');

const Users = admin.firestore().collection('users');
const Leaders = admin.firestore().collection('leaders');
const Posts = admin.firestore().collection('posts');
const ucfirst=(str)=>str.toLowerCase().replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,($1)=>$1.toUpperCase());


const WelcomeEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const WelcomeTemplate = handlebars.compile(WelcomeEmailContent);
module.exports.userCreate = functions.firestore.document('/users/{uid}').onCreate(async (snap, context)=>{
    const client = snap.data();
    const leader = !!client.leader?(await Users.doc(client.leader).get()):{exists:false};
    const isLeader = await Leaders.where('cedula', '==', parseInt(client.cedula)).limit(1).get();
    const locked = !(leader.exists || isLeader.size);
    await Promise.all([
        snap.ref.update({
            locked,
            followers:{ size:0, },
            uid:context.params.uid,
            cedula:parseInt(client.cedula),
            fullname:ucfirst(client.fullname),
            leader:leader.exists && leader.id,
            rol: parseInt(client.cedula)===71779276?0:(isLeader.size?1:2),
        }),
        leader.exists && leader.ref.update({
            followers:{
                size: leader.data().followers.size+1,
            },
        })
    ]);
    if(!locked)
    await mail.sendMail({
        from: '"Dimelo.vip" <no-reply@dimelo.vip>',
        to: client.email,
        subject: `${client.fullname} bienvenido a dimelo.vip`,
        html: WelcomeTemplate(client),
    });
    return undefined;
});



module.exports.leadersUpdate = functions.firestore.document('/leaders/{uid}').onWrite(async snap=>{
    const _old = snap.before;
    const _new = snap.after;
    const client = _new.exists?_new.data():_old.data();
    const rol = _new.exists?(client.cedula===71779276?0:1):2;
    await Users.where('cedula', '==', client.cedula).get().then(_snap=>{
        const batch = admin.firestore.batch();
        for(doc of docs)
            batch.update(doc.id, {rol});
        return batch.commit();
    });
    return;
});


module.exports.onUserUpdate = functions.firestore.document('/users/{uid}').onUpdate(async (snap, context)=>{
    const before = snap.before.data();
    const after = snap.after.data();
    if(before.photoURL !== after.photoURL || before.fullname !== after.fullname){
        Posts.where('autor.uid', '==', context.params.uid).get().then(posts=>{
            posts.forEach((post)=>{
                post.ref.update({ autor:{ fullname:after.fullname, photoURL:after.photoURL, }, });
            });            
        })
    }
});
module.exports.onPostDelete = functions.firestore.document('/posts/{uid}').onDelete((snap, context)=>{
    return admin.storage().ref(`/posts/${context.params.uid}`).delete();
});