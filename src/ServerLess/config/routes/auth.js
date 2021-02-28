import Users from '~/ServerLess/collections/Users'
import firebase from '~/ServerLess/config/firebase'
import error from '~/ServerLess/utils/error';

const auth = {
    async signUp({ email, password, ...props }){
        return await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({user})=>Users.doc(user.uid).set({ ...user.providerData[0], ...props, uid:user.uid, email, }));
    },
    signIn: async ({email, password, remember=false})=>{
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']);
        const snap = await Users.where('email', '==', email).get();
        const user = snap?.docs[0]?.data();
        if(!user) error("Email no registrado");
        else if(user.locked) error("Cuenta bloqueada");
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;
    },
    signOut: async (callback=()=>{})=>firebase.auth().signOut().then(callback),
};

export { auth };