import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZGdgf_iDgbaKtEkFtPLlkzGiIHTGG_wM",
  authDomain: "shazam-music-4c692.firebaseapp.com",
  projectId: "shazam-music-4c692",
  storageBucket: "shazam-music-4c692.firebasestorage.app",
  messagingSenderId: "276531340253",
  appId: "1:276531340253:web:856cbeeccc8f57ca9e0c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}