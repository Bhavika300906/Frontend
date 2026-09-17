import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // PASTE YOUR REAL KEYS HERE
  apiKey: "AIzaSyAREpA0OWaw0Sm-Lka1lrF8UPrkT6N5L7g",
  authDomain:"service-5116b.firebaseapp.com",
  projectId: "service-5116b",
  storageBucket:  "service-5116b.firebasestorage.app",
  messagingSenderId: "853781154884",
  appId: "1:853781154884:web:e3553edd64c5ed22488011"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);