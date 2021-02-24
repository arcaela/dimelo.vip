const { admin, functions } = require('../config');

module.exports.leaderModified = functions.firestore.document('leaders/{uid}').onWrite(async snap=>{
    const _old = snap.before;
    const _new = snap.after;
    const leader = _new.exists?_new.data():_old.data();
    leader.rol = _new.exists?1:2;
    return admin.firestore().collection('users').where('cedula', '==', leader.cedula).get(_=>{
        const batch = admin.firestore.batch();
        for(doc of docs)
            batch.update(doc.data().uid, {rol});
        return batch.commit();
    });
});