import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG10Od0GqDjssrNekMRgVUpcZbsnvv8-g",
  authDomain: "blogproject-de9b6.firebaseapp.com",
  projectId: "blogproject-de9b6",
  storageBucket: "blogproject-de9b6.appspot.com",
  messagingSenderId: "113022509888",
  appId: "1:113022509888:web:3699480f5e17374ba150a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();