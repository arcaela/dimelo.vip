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

    async update({ picture = null, password = null, ...props }){
        const user = firebase.auth().currentUser;
        const updateData = { ...props, uid:user.uid }

        if(picture){ 
            const urlImage = await firebase.storage()
                                            .ref(`/users/${user.uid}/avatar`)
                                            .put(picture)
                                            .then(snap=>snap.ref.getDownloadURL())

            updateData.photoURL = urlImage
        }

        return scopes.users.doc( user.uid ).update( updateData );
    },
    
};

export { auth };