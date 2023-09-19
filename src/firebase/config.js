// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_GgmI1wVMKhjqhCysnXLN3dz7SnkqD8I",
  authDomain: "darts-app-production.firebaseapp.com",
  projectId: "darts-app-production",
  storageBucket: "darts-app-production.appspot.com",
  messagingSenderId: "838903704890",
  appId: "1:838903704890:web:d0f541960349c9d3087403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db