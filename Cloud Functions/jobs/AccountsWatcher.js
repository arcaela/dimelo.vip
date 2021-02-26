const { functions, admin } = require('../config');

exports.unusedAccounts = functions.pubsub.schedule('every 1 minutes').onRun(async () => {
  const snap = await admin.firestore().collection('users').get();
    for (const _data of snap.docs) {
        const user = _data.data();
        const auth = await admin.auth().getUserByEmail( user.email );
        if(!auth) await _data.ref.delete();
    }
    return null;
});