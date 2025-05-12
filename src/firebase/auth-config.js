// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0PA97mSf052MlLfxXeHOhvecdGy2N-I",
  authDomain: "auth-413a5.firebaseapp.com",
  projectId: "auth-413a5",
  storageBucket: "auth-413a5.firebasestorage.app",
  messagingSenderId: "739565640027",
  appId: "1:739565640027:web:9767d41ab8cb64c828627e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
      console.log("ProfilePic URL:", localStorage.getItem("profilePic"));


    })
    .catch((error) => {
      console.log(error);
    });
};
