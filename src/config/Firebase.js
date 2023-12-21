import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_AUTH_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID
};


const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)
