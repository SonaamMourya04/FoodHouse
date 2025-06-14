import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB5J4F6oDD0H16aUS7glyBBu415ezXY9Q",
  authDomain: "foodhouse-8b803.firebaseapp.com",
  projectId: "foodhouse-8b803",
  storageBucket: "foodhouse-8b803.firebasestorage.app",
  messagingSenderId: "534689145471",
  appId:"1:534689145471:web:3eaae6f4037af0395c154a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);