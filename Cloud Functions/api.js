const { admin, functions } = require('./config');





const db = admin.firestore();
const users = db.collection('users');
// const leaders = db.collection('leaders');


module.exports.onLeadersChange = functions.firestore.document('leaders/{uid}').onWrite((snap, context)=>{
    // const prev = snap.before;
    // users.where( 'cedula', '==', prev.get('cedula') ).get()
    // .then(({ docs })=>{
        // if(docs.length){
            // docs[0].update({
                // role:snap.
            // });
        // }
    // })
});

module.exports.onUserCreate = functions.firestore.document('users/{uid}').onCreate(async snap=>{
    const client = snap.data();
    const { exists } = await db.collection('leaders').doc(client.cedula).get();
    await users.doc(client.uid).update({
        role:exists?'leader':'user',
    });
});