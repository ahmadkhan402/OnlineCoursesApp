// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfRV5P9kD21gUHBr5gcuWKIoeFSm6WBd4",
  authDomain: "meta-project-d3a67.firebaseapp.com",
  projectId: "meta-project-d3a67",
  storageBucket: "meta-project-d3a67.appspot.com",
  messagingSenderId: "707553426822",
  appId: "1:707553426822:web:b38b7c3875bcc9a4630007",
  measurementId: "G-3E4EWY97QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth}
export {app}