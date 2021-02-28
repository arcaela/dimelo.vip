const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { functions, mail, admin } = require('../config');


const Users = admin.firestore().collection('users');
// const Posts = admin.firestore().collection('posts');
// const Leaders = admin.firestore().collection('leaders');


const WelcomeEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const WelcomeTemplate = handlebars.compile(WelcomeEmailContent);
module.exports.userCreate = functions.firestore.document('/users/{uid}').onCreate(async (snap) => {
    const client = snap.data();
    let locked  = !client.leader || !(await Users.doc(client.leader).get()).exists;
    if(locked)
        await snap.ref.update({ leader:71779276, locked:true, });
    else
        await mail.sendMail({
            from: '"Dimelo.vip" <no-reply@dimelo.vip>',
            to: client.email,
            subject: `${client.name} bienvenido a dimelo.vip`,
            html: WelcomeTemplate(client),
        });
    return undefined;
});


module.exports.leadersUpdate = functions.firestore.document('leaders/{uid}').onWrite(async snap=>{
    const _old = snap.before;
    const _new = snap.after;
    const leader = _new.exists?_new.data():_old.data();
    const rol = _new.exists?(_new.data().cedula===71779276?0:1):2;
    return admin.firestore().collection('users').where('cedula', '==', leader.cedula).get(_=>{
        const batch = admin.firestore.batch();
        for(doc of docs)
            batch.update(doc.data().uid, {rol});
        return batch.commit();
    });
});