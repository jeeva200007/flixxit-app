import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqAJRWTA4ZvanyxJ0w0IRGnR8Jr4-GokM",
  authDomain: "flixxit-a83d1.firebaseapp.com",
  projectId: "flixxit-a83d1",
  storageBucket: "flixxit-a83d1.appspot.com",
  messagingSenderId: "226251378663",
  appId: "1:226251378663:web:d959cea7614a90299eb742",
  measurementId: "G-N90DH6B896",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
