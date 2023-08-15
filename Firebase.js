// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmt9rGCmYXjsNmE0SyIN-pW50bsclMLcc",
  authDomain: "meta-projectfirebase.firebaseapp.com",
  projectId: "meta-projectfirebase",
  storageBucket: "meta-projectfirebase.appspot.com",
  messagingSenderId: "737439106097",
  appId: "1:737439106097:web:5c725af9f9f8f894390110",
  measurementId: "G-H3951CFD8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}