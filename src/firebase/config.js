// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBV6lnKZsdsUMq9LyEhWC6Vv45wKHzQ6hg",
  authDomain: "vuex-firebase-auth-94244.firebaseapp.com",
  projectId: "vuex-firebase-auth-94244",
  storageBucket: "vuex-firebase-auth-94244.appspot.com",
  messagingSenderId: "837732525491",
  appId: "1:837732525491:web:18944557092698898c57c6",
  measurementId: "G-7ZK4CGXDNP"
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth

const auth = getAuth();

export { auth };
