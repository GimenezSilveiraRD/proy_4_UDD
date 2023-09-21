// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANQtMUZS5bwe6o6Yq5UeNelNoi_0LzJe8",
  authDomain: "proy-4-udd.firebaseapp.com",
  projectId: "proy-4-udd",
  storageBucket: "proy-4-udd.appspot.com",
  messagingSenderId: "5564558169",
  appId: "1:5564558169:web:cf2fa180ff03b72955ba48",
  measurementId: "G-3CZCEGXP69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);