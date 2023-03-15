import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-T2GDgCvc4Lab3a-cUJwT8-vGWB9bG1U",
    authDomain: "te21-lan.firebaseapp.com",
    projectId: "te21-lan",
    storageBucket: "te21-lan.appspot.com",
    messagingSenderId: "101946379888",
    appId: "1:101946379888:web:282e405860675e3df4aeb5"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);