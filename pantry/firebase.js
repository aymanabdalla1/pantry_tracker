// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnUxbg6hgtfoT62fE9VtHBRb8Yx1gBhzo",
  authDomain: "pantryapp-8388d.firebaseapp.com",
  projectId: "pantryapp-8388d",
  storageBucket: "pantryapp-8388d.appspot.com",
  messagingSenderId: "385418212187",
  appId: "1:385418212187:web:74fee876c9dc1835aa207e",
  measurementId: "G-NGF9X03485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app, firebaseConfig}
const analytics = getAnalytics(app);