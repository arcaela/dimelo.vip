import React from 'react'
import { firebase, users } from './api'



export default function useAuth(){
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
    return current && {
        profile:current, // UserData
        update(newData,callback=()=>{}){ // FireStore Update
            if(!current) return null;
            return users.doc(`${current.uid}`).update(newData).then(callback);
        },
        followers:users.where('leader', '==', current.uid).get, // FireStore Snapshot(s)
    };
}