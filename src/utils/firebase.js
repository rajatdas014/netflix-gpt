// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMlIzWIoAoBo_9U1644_gb07uADu9wPNg",
  authDomain: "netflixgpt-7bb66.firebaseapp.com",
  projectId: "netflixgpt-7bb66",
  storageBucket: "netflixgpt-7bb66.appspot.com",
  messagingSenderId: "879882068412",
  appId: "1:879882068412:web:50cb3c8911ba081606cbb9",
  measurementId: "G-45XYSDT66B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();