// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRUkyVBE5azhImEELJXWB5PYNJTWzmFEE",
  authDomain: "react-ecommerce-78288.firebaseapp.com",
  projectId: "react-ecommerce-78288",
  storageBucket: "react-ecommerce-78288.appspot.com",
  messagingSenderId: "101999203400",
  appId: "1:101999203400:web:2a70c79a42a847b8e7347d"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);

export const database = getFirestore(firebaseapp);