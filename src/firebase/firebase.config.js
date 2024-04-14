// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfcm9hc3ybwH51JTA3GzS1Pvmgw7bJ4g0",
    authDomain: "react-dragon-news-auth-a130b.firebaseapp.com",
    projectId: "react-dragon-news-auth-a130b",
    storageBucket: "react-dragon-news-auth-a130b.appspot.com",
    messagingSenderId: "1077866575482",
    appId: "1:1077866575482:web:d8402edd0eeb585e162dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;