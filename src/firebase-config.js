// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnUweqszxIwNcJdU4BwP7l00gy3KPsBoA",
  authDomain: "fir-tutor-f3667.firebaseapp.com",
  projectId: "fir-tutor-f3667",
  storageBucket: "fir-tutor-f3667.firebasestorage.app",
  messagingSenderId: "976542274306",
  appId: "1:976542274306:web:20c3ad6d7997ee4c8d281b",
  measurementId: "G-1F1QFC367Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);