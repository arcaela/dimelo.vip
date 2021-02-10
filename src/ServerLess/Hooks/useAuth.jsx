import React from 'react'
import firebase from '../../config/firebase';
import CollectionsUsers from '../Collections/Users'


export default function useAuth(){
    const [ user, setUser ] = React.useState(null);
    const listen = React.useRef(null);
    React.useEffect(()=>{
        if(listen.current) listen.current();
        const unsubscribed = firebase.auth().onAuthStateChanged(async state=>{
            if(state && !!state !== user){
                listen.current = CollectionsUsers.doc(`${state.uid}`).onSnapshot(snap=>setUser({
                    ...state.providerData[0],
                    ...snap.data(),
                }));
            }
        });
        return () => unsubscribed();
    });
    return user && {
        ...user, // UserData
        followers:()=>CollectionsUsers.where('voting_leader', '==', user.uid).get(), // FireStore Snapshot(s)
    };
}