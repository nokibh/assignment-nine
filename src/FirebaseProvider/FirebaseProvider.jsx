import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../firebase/firebase';

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const allValue = { createUser };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
