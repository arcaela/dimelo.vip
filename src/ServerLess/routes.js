import firebase from '../config/firebase'
export { firebase };



export const users = firebase.firestore().collection('users');
const routes = {
    auth:{
        signUp({email, password, ...props}){
            // @errors | https://firebase.google.com/docs/reference/js/firebase.auth.Error?hl=es
            return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((snap)=>{
                console.log(snap)
                const client={ ...snap.user.providerData[0],uid:snap.user.uid, email, role:'user', ...props};
                return users.doc(client.uid).set(client).then(()=>client);
            });
        },
        signIn: async ({email, password, remember=false})=>firebase.auth()
            .setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION'])
            .then(firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user=>users.doc(user.uid).get))
            .catch(error=>{ throw new Error(error.replace('auth/',''))}),
    },
};



export default routes;