import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [acc_details, setacc_details] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth ,acc_details,setacc_details}}>
      {children}
    </AuthContext.Provider>
  );
};
