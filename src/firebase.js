// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuwH99Bw9Qvq7xLPRSBiA7t6ISIxZDauo",
  authDomain: "clone-c2959.firebaseapp.com",
  projectId: "clone-c2959",
  storageBucket: "clone-c2959.appspot.com",
  messagingSenderId: "216648509335",
  appId: "1:216648509335:web:7f80a1bbf4271797ee46d2",
  measurementId: "G-RXXEJN8548",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
