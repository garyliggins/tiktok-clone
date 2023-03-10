
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import firebaseConfig from './firebaseConfig';

//initialize firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();
const increment = firebase.firestore.FieldValue.increment();

export {auth, provider, storage, serverTimestamp, increment}
export default db;
