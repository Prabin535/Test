// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAged89r2SHFqM7g_sZcbs9RlRP0qNgg8Y",
  authDomain: "shopify-ad579.firebaseapp.com",
  projectId: "shopify-ad579",
  storageBucket: "shopify-ad579.appspot.com",
  messagingSenderId: "716322632219",
  appId: "1:716322632219:web:c2c850437df4f2987d7ebe",
  measurementId: "G-YHTQJMVZB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export let auth=getAuth(app);
// const analytics = getAnalytics(app);