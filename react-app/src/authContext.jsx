import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// AuthProvider component to provide the auth state to the entire app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Login function
  const login = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
    localStorage.setItem('token', userToken);
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
