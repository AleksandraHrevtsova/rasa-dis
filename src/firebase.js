import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
  // apiKey: "AIzaSyCtSBVxtTSNiGHRBytajAm1bS7awy7nf6k",
  // authDomain: "silicon-light-483400-j3-b8fc1.firebaseapp.com",
  // projectId: "silicon-light-483400-j3-b8fc1",
  // storageBucket: "silicon-light-483400-j3-b8fc1.firebasestorage.app",
  // messagingSenderId: "365913350550",
  // appId: "1:365913350550:web:286ec06b0a089f079b3db7",
  // measurementId: "G-LBGQNDRRPV"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
