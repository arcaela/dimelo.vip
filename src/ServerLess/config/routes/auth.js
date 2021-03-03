import { scopes, error, firebase } from '~/ServerLess';

const auth = {
    async signUp({ email, password, ...props }){
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({user:{uid}})=>scopes.users.doc(uid).set({...props,email,uid,locked:false,rol:2,followers:{size:0}}));
    },
    signIn: async ({email, password, remember=false})=>{
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[!!remember?'LOCAL':'SESSION']);
        const snap = await scopes.users.where('email', '==', email).limit(1).get();
        const user = snap?.docs[0]?.data();
        if(!user) error("La cuenta no está registrada");
        else if(user.locked) error("Tu acceso ha sido bloqueado");
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signOut:(callback=()=>{})=>firebase.auth().signOut().then(callback),
};

export { auth };