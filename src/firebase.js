import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBPBmz3JCkJ1xsui7oRiS8iagKW0YiiPCY",
    authDomain: "slack-clone-d97c4.firebaseapp.com",
    projectId: "slack-clone-d97c4",
    storageBucket: "slack-clone-d97c4.appspot.com",
    messagingSenderId: "50409559025",
    appId: "1:50409559025:web:5ef99479c939219163ea50"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;