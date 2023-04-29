// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuA8K_IW5PXiDMHliAo9nOr0ksXRHHYno",
  authDomain: "kalmak-app-rn-7b27c.firebaseapp.com",
  projectId: "kalmak-app-rn-7b27c",
  storageBucket: "kalmak-app-rn-7b27c.appspot.com",
  messagingSenderId: "45489491285",
  appId: "1:45489491285:web:71c1a9b8938dfd3bc6b3dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
