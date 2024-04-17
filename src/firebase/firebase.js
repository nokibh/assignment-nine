import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjqcMGJlzJ4M_u4s6EHuWuDQQzxHIJ5AU',
  authDomain: 'assignment-9-d55ff.firebaseapp.com',
  projectId: 'assignment-9-d55ff',
  storageBucket: 'assignment-9-d55ff.appspot.com',
  messagingSenderId: '371500706202',
  appId: '1:371500706202:web:afc329b959811a74e57223',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

const auth = getAuth(app);
export default auth;
