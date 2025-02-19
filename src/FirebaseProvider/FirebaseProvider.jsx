import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update
  const updateProfile = (name, email, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      photoURL: image,
    });
  };
  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // logout
  const logOut = () => {
    setUser(null);

    signOut(auth);
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
      return () => unsubscribe();
    });
  }, []);
  const allValue = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
    loading,
    updateProfile,
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
