// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhrDgVsFrkttBb4RHaUiriWETn7HQEQhA",
  authDomain: "chatbox-5cc70.firebaseapp.com",
  projectId: "chatbox-5cc70",
  storageBucket: "chatbox-5cc70.appspot.com",
  messagingSenderId: "400627386658",
  appId: "1:400627386658:web:c86a4b19b0c20de6e5bd7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);