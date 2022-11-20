import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Trk8qSBgICzAVoiMwMCzG74MAfcs7sA",
  authDomain: "digitalk-7409d.firebaseapp.com",
  projectId: "digitalk-7409d",
  storageBucket: "digitalk-7409d.appspot.com",
  messagingSenderId: "434744718582",
  appId: "1:434744718582:web:67b80874ad8aa24210a8d7",
  measurementId: "G-YTBVN57P31"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
