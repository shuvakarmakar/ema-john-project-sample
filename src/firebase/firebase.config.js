// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP2azXGsOkCatbfXCL96JiV1p8gCOTK2o",
  authDomain: "ema-john-with-firebase-a-9a3a0.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-9a3a0",
  storageBucket: "ema-john-with-firebase-a-9a3a0.appspot.com",
  messagingSenderId: "23682874622",
  appId: "1:23682874622:web:cfb8af98db473d51e8b9af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;