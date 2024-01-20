// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3T3FQBG7CRAtgeck_F44u1lm-1UQsKgE",
  authDomain: "ethub-world.firebaseapp.com",
  projectId: "ethub-world",
  storageBucket: "ethub-world.appspot.com",
  messagingSenderId: "349555445891",
  appId: "1:349555445891:web:1cb9f4f7caa2d59632cbb6",
  measurementId: "G-PQC8CSC7D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;