import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLLmd9MNBT7wK4qQhvXN6eHceqTvUskdc",
  authDomain: "fav-princess.firebaseapp.com",
  projectId: "fav-princess",
  storageBucket: "fav-princess.appspot.com",
  messagingSenderId: "188964813995",
  appId: "1:188964813995:web:dad59a3fae1d01178b4bee",
  measurementId: "G-40TBN38734",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);
