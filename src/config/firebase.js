import { firebase, FirebaseLoad } from '@arcaela/aurora/firebase'
import 'firebase/auth'
import 'firebase/firestore'
FirebaseLoad({
    '[DEFAULT]':{
        apiKey: "AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208",
        authDomain: "dimelo-vip-col.firebaseapp.com",
        projectId: "dimelo-vip-col",
        storageBucket: "dimelo-vip-col.appspot.com",
        messagingSenderId: "909520655494",
        appId: "1:909520655494:web:f1f178d8e564789ea22d07"
      },
    firestore:null,
});
console.log(firebase)
export default firebase;