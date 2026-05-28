import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "fsc-portfolio.firebaseapp.com",
  projectId: "fsc-portfolio",
  storageBucket: "fsc-portfolio.appspot.com",
  messagingSenderId: "215109695269",
  appId: "XXX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);