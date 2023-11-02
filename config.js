import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


  
  const firebaseConfig = {
    apiKey: "AIzaSyD3PbqCIDtT4BbW1QaVhCgKU3lCg22phzo",
    authDomain: "mobile-mart-3aa1b.firebaseapp.com",
    projectId: "mobile-mart-3aa1b",
    storageBucket: "mobile-mart-3aa1b.appspot.com",
    messagingSenderId: "160013816993",
    appId: "1:160013816993:web:e00016a232892baac18ce0",
    measurementId: "G-3DXH0JGQP3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);