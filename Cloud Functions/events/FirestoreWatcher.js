const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { functions, mail, admin } = require('../config');



const WelcomeEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const WelcomeTemplate = handlebars.compile(WelcomeEmailContent);
module.exports.userCreate = functions.firestore.document('/users/{uid}').onCreate(async (snap) => {
    const client = snap.data();
    admin.firestore().collection('leaders')
    return mail.sendMail({
        from: '"Dimelo.vip" <no-reply@dimelo.vip>',
        to: client.email,
        subject: `${client.name} bienvenido a dimelo.vip`,
        html: WelcomeTemplate(client),
    });
});




module.exports.leadersUpdate = functions.firestore.document('leaders/{uid}').onWrite(async snap=>{
    const _old = snap.before;
    const _new = snap.after;
    const leader = _new.exists?_new.data():_old.data();
    leader.rol = _new.exists?( _new.data().dni===11111111?0:1 ):2;
    return admin.firestore().collection('users').where('dni', '==', leader.dni).get(_=>{
        const batch = admin.firestore.batch();
        for(doc of docs)
            batch.update(doc.data().uid, {rol});
        return batch.commit();
    });
});