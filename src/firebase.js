import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu7GxpxskG9dPY5mHrtHfivUhcJo0zfns",
  authDomain: "chat-20f6f.firebaseapp.com",
  projectId: "chat-20f6f",
  storageBucket: "chat-20f6f.appspot.com",
  messagingSenderId: "932823351377",
  appId: "1:932823351377:web:5b52a377f0a9d255067870",
  measurementId: "G-MKJTFY22SZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
