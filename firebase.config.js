// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGliALuV6poAWpxtnUWG3UU0SJsPFNo-k",
  authDomain: "simple-firebase-24436.firebaseapp.com",
  projectId: "simple-firebase-24436",
  storageBucket: "simple-firebase-24436.appspot.com",
  messagingSenderId: "905584637232",
  appId: "1:905584637232:web:3811d0766b04e5663384f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
