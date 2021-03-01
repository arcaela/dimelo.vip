const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
	apiKey: "AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208",
	authDomain: "dimelo-vip-col.firebaseapp.com",
	databaseURL: "https://dimelo-vip-col-default-rtdb.firebaseio.com",
	projectId: "dimelo-vip-col",
	storageBucket: "dimelo-vip-col.appspot.com",
	messagingSenderId: "909520655494",
	appId: "1:909520655494:web:f1f178d8e564789ea22d07"
});

const db = new Proxy({_:admin.firestore()},{
	get:(_,k)=>_._ || _._.collection(k),
});

const mail = require('nodemailer').createTransport({
    service: 'gmail',
    auth: { user: 'arcaela16@gmail.com', pass: 'clthzjmuvckslvry', },
});



module.exports = { functions, admin, db, mail };