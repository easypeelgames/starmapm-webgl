// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbuV5x5o4Mcr2kZUJIN1k88kdpe7AAm3w",
    authDomain: "starmap-adc10.firebaseapp.com",
    databaseURL: "https://starmap-adc10-default-rtdb.firebaseio.com",
    projectId: "starmap-adc10",
    storageBucket: "starmap-adc10.appspot.com",
    messagingSenderId: "153355442956",
    appId: "1:153355442956:web:5deb3a3182416353a7c729",
    measurementId: "G-SJDX22XNRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);