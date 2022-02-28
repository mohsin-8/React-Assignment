// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPWcM-TBxBK1y7LfnIyOPItZzjJdrUSj4",
    authDomain: "practice-firebase-6162d.firebaseapp.com",
    projectId: "practice-firebase-6162d",
    storageBucket: "practice-firebase-6162d.appspot.com",
    messagingSenderId: "706877038368",
    appId: "1:706877038368:web:79c958c570bd34761f0145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);