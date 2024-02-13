// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-cd281.firebaseapp.com",
  projectId: "mern-auth-cd281",
  storageBucket: "mern-auth-cd281.appspot.com",
  messagingSenderId: "459013221015",
  appId: "1:459013221015:web:57d82361847c5e4e9397d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);