// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbd_WlTnTfQOY_n3ibV4Ezjf4oRe2ythA",
    authDomain: "proyectofinal-43185.firebaseapp.com",
    projectId: "proyectofinal-43185",
    storageBucket: "proyectofinal-43185.appspot.com",
    messagingSenderId: "505510427698",
    appId: "1:505510427698:web:95b8563a644ce9ee66902b",
    measurementId: "G-X7S8NKP81S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
