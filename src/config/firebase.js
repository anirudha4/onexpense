import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-Q2gNnsRzu3xvAZppaK7R8B7KetLMzlc",
    authDomain: "one-app-ad983.firebaseapp.com",
    projectId: "one-app-ad983",
    storageBucket: "one-app-ad983.appspot.com",
    messagingSenderId: "418813022468",
    appId: "1:418813022468:web:ea5597b73cdcdc9a1d4051"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const authentication = getAuth(app);

export const gProvider = new GoogleAuthProvider();
