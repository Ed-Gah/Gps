// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGUraz7hrWCq-PrqGOCNzK8b9K5e8cc4",
  authDomain: "declan-s-covide-19-tracker.firebaseapp.com",
  projectId: "declan-s-covide-19-tracker",
  storageBucket: "declan-s-covide-19-tracker.appspot.com",
  messagingSenderId: "419864380062",
  appId: "1:419864380062:web:1efb7be433d5adf40ab18f",
  measurementId: "G-MTN0RNMWZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
