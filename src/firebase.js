import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9l4QMo4Drlav-JhedtpU2K40ZjZPFkQY",
  authDomain: "clone-e02e4.firebaseapp.com",
  projectId: "clone-e02e4",
  storageBucket: "clone-e02e4.appspot.com",
  messagingSenderId: "388438669520",
  appId: "1:388438669520:web:e82e4f95b4d0e775ab86d5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
