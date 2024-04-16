import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCNI_ZGojwsGN7x_zMQGhAvpg0cckxkieM',
  authDomain: 'auth-module-51-8b861.firebaseapp.com',
  projectId: 'auth-module-51-8b861',
  storageBucket: 'auth-module-51-8b861.appspot.com',
  messagingSenderId: '1050765209248',
  appId: '1:1050765209248:web:7355f430e970b6773423c5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
