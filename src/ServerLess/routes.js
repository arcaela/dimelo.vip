import firebase from '../config/firebase'
export { firebase };



export const users = firebase.firestore().collection('users');
const routes = {
    auth:{
        async signUp({email, password, ...props}){
            try {
                const {user:{uid}} = await firebase.auth().createUserWithEmailAndPassword(email, password);
                const client={ uid, email, role:'user', ...props};
                return users.doc(uid).set(client).then(()=>client);
            } catch (error) { return {error:error.replace('auth/','')}; }
        },
        signIn: ({email, password, remember=false})=>firebase.auth()
            .setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION'])
            .then(firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user=>users.doc(user.uid).get))
            .catch(error=>{ throw new Error(error.replace('auth/',''))}),
    },
};



export default routes;