import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase कॉन्फ़िगरेशन
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
      console.log("लॉगिन सफल हुआ:", result.user);
      alert(`नमस्ते ${result.user.displayName}! लॉगिन सफल रहा।`);
    } catch (error) {
      console.error("लॉगिन में एरर आया:", error);
      alert("लॉगिन नहीं हो सका: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px', backgroundColor: '#211717', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2>Feeling.L</h2>
      <button 
        onClick={handleGoogleLogin} 
        style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
      >
        Google Sign In
      </button>
    </div>
  );
}

export default App;

