import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASKxe9JlgIa25CQuMGJhCWN8RqMR-kfZg",
  authDomain: "aarhti-fyp.firebaseapp.com",
  projectId: "aarhti-fyp",
  storageBucket: "aarhti-fyp.appspot.com",
  messagingSenderId: "25035634530",
  appId: "1:25035634530:web:909ce349b7a82df137de3b",
  measurementId: "G-C8PLGFQR9Y"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();
export{app,auth};