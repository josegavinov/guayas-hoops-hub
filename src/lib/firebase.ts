// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available_libraries

// Prefer using environment variables. If not set, se usan valores embebidos provistos.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBZwV-PQB_dFwTMX33J0hVJnpFN8EjBneQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mi-landing1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mi-landing1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mi-landing1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "126697889484",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:126697889484:web:2f4a4328d29109f56c6c69",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-1BBWC3NNMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | null = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics may fail during SSR or if not supported; ignore silently
}

export const db = getFirestore(app);
export { analytics };


