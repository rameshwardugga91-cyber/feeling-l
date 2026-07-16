import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase कॉन्फ़िगरेशन (Vercel Variables को पढ़ेगा)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "feeling-l.firebaseapp.com",
  projectId: "feeling-l",
  storageBucket: "feeling-l.appspot.com",
  messagingSenderId: "feeling-l",
  appId: "feeling-l"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("लॉगिन सफल यूज़र:", result.user);
      alert(`नमस्ते ${result.user.displayName}! लॉगिन सफल रहा।`);
    } catch (error) {
      console.error("लॉगिन में एरर आया:", error);
      alert("लॉगिन नहीं हो सका: " + error.message);
    }
  };

  return null;
}

export default App;
