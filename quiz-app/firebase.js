// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCYG00R8zU3nWQljxsfRrxsXCQm6hADrU",
  authDomain: "quiz-app-6f820.firebaseapp.com",
  projectId: "quiz-app-6f820",
  storageBucket: "quiz-app-6f820.appspot.com",
  messagingSenderId: "822613490524",
  appId: "1:822613490524:web:6ef843ffa06eef93371f99",
  measurementId: "G-GVD3PWJXMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }