import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../config/firebase';

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null); // のちにProviderのvalueに渡す
  console.log('user: ', user);
  useEffect(() => {
    /* ログイン状態を監視するFirebaseのメソッド */
    auth.onAuthStateChanged(user => {
      if (user) { // ログインしていた場合このuserに情報が入る
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
