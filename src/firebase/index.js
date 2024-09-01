// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh3SjNWXlqRc5S4sCFhFNkmzJ0qw_i4gs",
  authDomain: "chat-project-da64e.firebaseapp.com",
  projectId: "chat-project-da64e",
  storageBucket: "chat-project-da64e.appspot.com",
  messagingSenderId: "446996432461",
  appId: "1:446996432461:web:9732592ae578695ee2fe04",
  measurementId: "G-P65Y9223N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);