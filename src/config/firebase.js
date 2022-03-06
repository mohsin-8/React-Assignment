import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyaISAInwfaVQhy1xarCF22Jlz0enJ-o4",
    authDomain: "todowithauth-momo.firebaseapp.com",
    projectId: "todowithauth-momo",
    storageBucket: "todowithauth-momo.appspot.com",
    messagingSenderId: "364208303144",
    appId: "1:364208303144:web:be784492619205517e991d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, app, auth };