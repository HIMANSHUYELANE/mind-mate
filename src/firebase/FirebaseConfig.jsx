// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_WesJJySkzcflKsAjua4OjYePwstetqk",
  authDomain: "mind-healer-ed112.firebaseapp.com",
  projectId: "mind-healer-ed112",
  storageBucket: "mind-healer-ed112.firebasestorage.app",
  messagingSenderId: "977377625979",
  appId: "1:977377625979:web:4f8fd0b0e8ab6eec5e5fde",
  measurementId: "G-X2DVX74NGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireDb = getFirestore(app);
export { auth, fireDb };