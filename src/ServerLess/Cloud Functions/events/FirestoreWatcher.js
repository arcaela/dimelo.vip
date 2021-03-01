const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { functions, mail, admin } = require('../config');


const Users = admin.firestore().collection('users');
const Leaders = admin.firestore().collection('leaders');

const WelcomeEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const WelcomeTemplate = handlebars.compile(WelcomeEmailContent);
module.exports.userCreate = functions.firestore.document('/users/{uid}').onCreate(async (snap, context)=>{
    const client = snap.data();
    const leader = !client.leader?{exists:false}:(await Users.doc(client.leader).get());
    const isLeader = await Leaders.where('cedula', '==', client.cedula).limit(1).get();
    // const locked = (!leader.exists && !isLeader.size);
    await Promise.all([
        snap.ref.update({
            locked:false,
            followers:{ size:0, },
            uid:context.params.uid,
            rol: isLeader.size?1:2,
            leader:leader.exists && leader.id,
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



module.exports.leadersUpdate = functions.firestore.document('leaders/{uid}').onWrite(async snap=>{
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