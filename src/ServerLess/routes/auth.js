import { scopes, error, firebase } from '~/ServerLess';



const auth = {
    async signUp({ email, password, ...props }){
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({user:{uid}})=>scopes.users.doc(uid).set({...props,email,uid,locked:false,rol:2,followers:{size:0}}));
    },
    signIn: async ({email, password})=>{
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const snap = await scopes.users.where('email', '==', email).limit(1).get();
        const user = snap?.docs[0]?.data();
        if(!user) error("La cuenta no está registrada");
        else if(user.locked) error("Tu acceso ha sido bloqueado");
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signOut:(callback=()=>{})=>firebase.auth().signOut().then(callback),

    async update({ picture, password, ...props }){
        const user = await firebase.auth().currentUser;
        const [ , photoURL ] = await Promise.all([
            password && user.updatePassword(password),
            firebase.storage().ref(`/users/${user.uid}/avatar`).put(picture).then(snap=>snap.ref.getDownloadURL()),
        ]);
        return scopes.users.doc( user.uid ).update({
            ...props,
            photoURL,
            uid:user.uid,
        });
    },
    
};

export { auth };