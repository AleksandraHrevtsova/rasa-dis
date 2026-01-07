import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtSBVxtTSNiGHRBytajAm1bS7awy7nf6k",
  authDomain: "silicon-light-483400-j3-b8fc1.firebaseapp.com",
  projectId: "silicon-light-483400-j3-b8fc1",
  storageBucket: "silicon-light-483400-j3-b8fc1.firebasestorage.app",
  messagingSenderId: "365913350550",
  appId: "1:365913350550:web:286ec06b0a089f079b3db7",
  measurementId: "G-LBGQNDRRPV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
