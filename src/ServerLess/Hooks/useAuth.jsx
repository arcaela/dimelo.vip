import React from 'react'
import firebase from '../../config/firebase';
import CollectionsUsers from '../Collections/Users'

export const $store = {
    user:null,
    firestore:false,
    unsubscribed:false,
    async flush(){
        if(this.unsubscribed) this.unsubscribed=await this.unsubscribed() && false;
        if(this.firestore) this.firestore=await this.firestore() && false;
    },
};


export default function useAuth(){
    const [ user, _setUser ] = React.useState($store.user);
    const setUser = _user=>_setUser($store.user=_user);
    React.useEffect(()=>{
        if(user===false) $store.flush();
        else if(user===null){
            $store.unsubscribed = firebase.auth().onAuthStateChanged(auth=>{
                if(!auth && user===null) setUser(false);
                else if(auth){
                    $store.firestore = CollectionsUsers.doc(auth.uid).onSnapshot(snap=>setUser({
                        ...auth.providerData[0],
                        ...snap.data(),
                    }));
                }
            });
        }
    }, [ user ]);
    return user && {
        ...user,
        followers:()=>CollectionsUsers.where('voting_leader', '==', (user.role==='admin'?'admin':user.cedula)).get(), // FireStore Snapshot(s)
    };
}