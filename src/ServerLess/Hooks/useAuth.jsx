import React from 'react'
import firebase from '../../config/firebase';
import CollectionsUsers from '../Collections/Users'

export default function useAuth(){
    const [ current, setCurrent ] = React.useState(null);
    const FireStoreOff = React.useRef(null);
    React.useEffect(()=>{
        const unsubscribed = firebase.auth().onAuthStateChanged(async state=>{
            if (state) FireStoreOff.current=CollectionsUsers.doc(`${state.uid}`).onSnapshot(snap=>setCurrent({
                ...state.toJSON(),
                ...snap.data()
            }))
        });
        return ()=>{ unsubscribed(); return (FireStoreOff.current && FireStoreOff.current()); };
    }, [ FireStoreOff ]);
    return current && {
        ...current, // UserData
        followers:()=>CollectionsUsers.where('leader', '==', current.uid).get(), // FireStore Snapshot(s)
    };
}