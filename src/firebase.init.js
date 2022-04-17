// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK-udegNmIQOeUl5HGKKmw4fN9CfNtn1Y",
    authDomain: "mr-doctor-4e732.firebaseapp.com",
    projectId: "mr-doctor-4e732",
    storageBucket: "mr-doctor-4e732.appspot.com",
    messagingSenderId: "14613311410",
    appId: "1:14613311410:web:b36ef32a1566109a0b3eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;