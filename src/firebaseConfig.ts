// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJy-ZqvzCGLpXZJjBVl8X0OL64Am42pSc",
  authDomain: "exercise-decay.firebaseapp.com",
  projectId: "exercise-decay",
  storageBucket: "exercise-decay.appspot.com",
  messagingSenderId: "1055724458469",
  appId: "1:1055724458469:web:87c13a6db946d5850ddf0c",
  measurementId: "G-TV9QE1CYE0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
