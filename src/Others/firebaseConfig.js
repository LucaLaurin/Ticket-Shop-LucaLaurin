// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9d96NA8EM3WJpAsDv3WwTFxNwxw6_V70",
    authDomain: "ticket-shop-a9de1.firebaseapp.com",
    projectId: "ticket-shop-a9de1",
    storageBucket: "ticket-shop-a9de1.appspot.com",
    messagingSenderId: "115266619770",
    appId: "1:115266619770:web:f2ac18ef0c00257b29eec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

