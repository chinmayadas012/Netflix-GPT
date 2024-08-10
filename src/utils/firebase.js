import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8chvlgyF8205HgExCr2nG3EWY55CsO0Y",
  authDomain: "netflix-gp.firebaseapp.com",
  projectId: "netflix-gp",
  storageBucket: "netflix-gp.appspot.com",
  messagingSenderId: "954289580334",
  appId: "1:954289580334:web:5ec40c156c82e5f64072bf",
  measurementId: "G-R3ZZG7LGRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
