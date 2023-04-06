// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9hw0YQjDXqd59iKbE-zNSKg_iXZQMe9E",
  authDomain: "tickets-9f65e.firebaseapp.com",
  projectId: "tickets-9f65e",
  storageBucket: "tickets-9f65e.appspot.com",
  messagingSenderId: "737629833807",
  appId: "1:737629833807:web:b1a801ce511532342ff83a",
  measurementId: "G-WFE8Y8PHVL"
};

const firebaseApp = initializeApp(firebaseConfig)
// Initialize Firebase
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };