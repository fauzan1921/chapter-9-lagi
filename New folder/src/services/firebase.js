// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTF_E5BardG00zwsfJsw84Wk3Kf6tl_OQ",
  authDomain: "binar-1add3.firebaseapp.com",
  projectId: "binar-1add3",
  storageBucket: "binar-1add3.appspot.com",
  messagingSenderId: "726436116484",
  appId: "1:726436116484:web:09ee0ba2e67f2589f79d51",
  measurementId: "G-JVRRYQ0M1B",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const authInstance = getAuth(app);
