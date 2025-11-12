import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBCKGrVSSW34Xetaw20TNR21IMy7nMLfU',
  authDomain: 'connect2roots-academy.firebaseapp.com',
  projectId: 'connect2roots-academy',
  storageBucket: 'connect2roots-academy.firebasestorage.app',
  messagingSenderId: '936503090599',
  appId: '1:936503090599:web:e517e556b08966adb76a82',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
