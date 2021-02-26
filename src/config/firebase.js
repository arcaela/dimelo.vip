import { firebase, FirebaseLoad } from '@arcaela/aurora/firebase'
import 'firebase/auth'
import 'firebase/firestore'
FirebaseLoad({
    '[DEFAULT]':{
      apiKey: "AIzaSyCmHdID5CITtQitGXu-NwK1OWVCouHM3oo",
      authDomain: "dimelo-vip-col.firebaseapp.com",
      databaseURL: "https://dimelo-vip-col-default-rtdb.firebaseio.com",
      projectId: "dimelo-vip-col",
      storageBucket: "dimelo-vip-col.appspot.com",
      messagingSenderId: "909520655494",
      appId: "1:909520655494:web:f1f178d8e564789ea22d07"
    },
    firestore:null,
});

export default firebase;
