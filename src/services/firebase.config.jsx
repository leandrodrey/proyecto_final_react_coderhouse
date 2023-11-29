// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};*/

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
