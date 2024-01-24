// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbPc-qHkILffj-4hT3GLjuXl1cAJ31rk0",
  authDomain: "coms319-66200.firebaseapp.com",
  projectId: "coms319-66200",
  storageBucket: "coms319-66200.appspot.com",
  messagingSenderId: "631814573739",
  appId: "1:631814573739:web:3efd4e678835a7e9a831ee",
  measurementId: "G-P3CDJ7SC49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// You can now use the 'auth' object for Firebase Authentication in your application.
