import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDd5c_BPzzWASogBB6EfUE8_lbsqriKw1s",
    authDomain: "chat-agro-8646a.firebaseapp.com",
    projectId: "chat-agro-8646a",
    storageBucket: "chat-agro-8646a.appspot.com",
    messagingSenderId: "123169107417",
    appId: "1:123169107417:web:ce737e4bc8380e54747dc8"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);