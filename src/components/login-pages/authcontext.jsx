import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [acc_details, setacc_details] = useState({});
  const [course_details, set_coursedetails] = useState({});
  const [erroDetails, set_erroredetails] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth ,
      acc_details, setacc_details,
      course_details, set_coursedetails,
      erroDetails, set_erroredetails}}>


      {children}
    </AuthContext.Provider>
  );
};
