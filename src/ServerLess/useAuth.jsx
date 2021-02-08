import React from 'react'
import { firebase } from '@arcaela/aurora/firebase'
import 'firebase/auth'
import 'firebase/firestore'


const users = firebase.firestore().collection('users');


export async function signUp({ email, password, ...props }){
    try {
        if(password.length<6) throw new Error('password-weak');
        const { user:{ uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await users.doc(uid).set({uid, email, password, ...props});
        return { uid, email, password, ...props};
    }
    catch (error) { return error.replace('auth/',''); }
}

export async function signIn({ email, password, remember=false }){
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence[remember?'LOCAL':'SESSION']);
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>users.doc(user.uid).get());
    }
    catch (error) { return error.replace('auth/',''); }
}

export function useAuth(){
    const [ current, setCurrent ] = React.useState(null);
    let FireStoreOff = ()=>{};
    React.useEffect(()=>{
        const unsubscribed = firebase.auth().onAuthStateChanged(async state=>{
            await FireStoreOff();
            if (state) FireStoreOff=users.doc(`${state.uid}`)
                .onSnapshot( ({data})=>setCurrent({...state.providerData[0], ...data(),}) );
        });
        return ()=>{ unsubscribed(); FireStoreOff=()=>{} };
    }, []);
    return current?{
        profile:current, // UserData
        update(newData,callback=()=>{}){ // FireStore Update
            if(!current) return null;
            return users.doc(`${current.uid}`).update(newData).then(callback);
        },
        followers:users.where('leader', '==', current.uid).get, // FireStore Snapshot(s)
    }:null;
}