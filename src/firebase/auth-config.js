// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_k7w8bDFH5L36txgFLhSOl3Q0mX9X0M",
  authDomain: "authentication-tutorial-d1483.firebaseapp.com",
  projectId: "authentication-tutorial-d1483",
  storageBucket: "authentication-tutorial-d1483.firebasestorage.app",
  messagingSenderId: "812682116831",
  appId: "1:812682116831:web:a57f41fcc731706685b36a",
  measurementId: "G-FHNBCFV9T7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
const analytics = getAnalytics(app);