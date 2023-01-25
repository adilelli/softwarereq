const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyA6oJLed3n7_FGI1cS3vv7iVksPgS6HAQM",
  authDomain: "game-cc6e4.firebaseapp.com",
  databaseURL: "https://game-cc6e4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "game-cc6e4",
  storageBucket: "game-cc6e4.appspot.com",
  messagingSenderId: "286434351601",
  appId: "1:286434351601:web:b805b65c1fb52867800c50",
  measurementId: "G-DBR4XBTRS5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
