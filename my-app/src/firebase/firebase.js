// Import the functions you need from the SDKs you need
import * as firebase from "firebase";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyCKOA7HyT4g_mKZQ-ioa9Qjorhzoe_GfKc",

    authDomain: "unique-cinema-323410.firebaseapp.com",

    databaseURL: "https://unique-cinema-323410-default-rtdb.firebaseio.com",

    projectId: "unique-cinema-323410",

    storageBucket: "unique-cinema-323410.appspot.com",

    messagingSenderId: "1054353054353",

    appId: "1:1054353054353:web:f6394303402879317cfd30",

    measurementId: "G-QL0MFBQ6GF"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
firebase.database().red().set({
    name : "Ayoub"
});

const analytics = getAnalytics(app);