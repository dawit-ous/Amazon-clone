
import firebase from "firebase/compat/app";
//auth authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import  "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWh5FJnOnd_Rg5Kd7SP9WDpnKOxaPhhTI",
  authDomain: "clone-78f2d.firebaseapp.com",
  projectId: "clone-78f2d",
  storageBucket: "clone-78f2d.firebasestorage.app",
  messagingSenderId: "827649682941",
  appId: "1:827649682941:web:eae2f8a9e13a9308f97d94",
};


// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()