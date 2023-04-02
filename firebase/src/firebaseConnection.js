import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC3KEnC7_f-cLToF5JqoBlOQXZYodlLmE8",
  authDomain: "test-2e0a1.firebaseapp.com",
  projectId: "test-2e0a1",
  storageBucket: "test-2e0a1.appspot.com",
  messagingSenderId: "920581333245",
  appId: "1:920581333245:web:39aa0082d888562a429e94",
  measurementId: "G-WE5121B8P9"
}

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };