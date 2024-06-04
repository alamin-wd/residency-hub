// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmfNuu_Gsfugfq1qkkAu6z9iHUiyaDZ9Q",
  authDomain: "residency-hub.firebaseapp.com",
  projectId: "residency-hub",
  storageBucket: "residency-hub.appspot.com",
  messagingSenderId: "575619683384",
  appId: "1:575619683384:web:f3ebc20c897fa21295c2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;