// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAfRV5P9kD21gUHBr5gcuWKIoeFSm6WBd4",
  authDomain: "meta-project-d3a67.firebaseapp.com",
  databaseURL: "https://meta-project-d3a67-default-rtdb.firebaseio.com",
  projectId: "meta-project-d3a67",
  storageBucket: "meta-project-d3a67.appspot.com",
  messagingSenderId: "707553426822",
  appId: "1:707553426822:web:b38b7c3875bcc9a4630007",
  measurementId: "G-3E4EWY97QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// provider



export {storage}
export {db}
export {auth}