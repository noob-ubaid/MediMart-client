import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(false);
  const provider = new GoogleAuthProvider();
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const google = () => {
    return signInWithPopup(auth, provider);
  };
  const updateUserProfile = (updatedProfile) => {
    return updateProfile(auth.currentUser, updatedProfile);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const resetPassword = email => {
    return sendPasswordResetEmail(auth,email)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const data = {
    loading,
    user,
    resetPassword,
    logOut,
    login,
    setUser,
    signUp,
    profile,
    setProfile,
    google,
    updateUserProfile,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
