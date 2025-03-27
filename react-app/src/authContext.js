import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
    localStorage.setItem('token', userToken);
  };

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
