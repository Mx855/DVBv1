import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxY6F3ahT-lrVLyHtl0u14rBxkO_P_6e8",
  authDomain: "app-dvb-869c5.firebaseapp.com",
  projectId: "app-dvb-869c5",
  storageBucket: "app-dvb-869c5.appspot.com", // ✅ Corrigé ici
  messagingSenderId: "158114575248",
  appId: "1:158114575248:web:eaf8786f44165da213f915"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Auth avec persistence
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
