import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    // Check if the user is already authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/register/');
        setUser(response.data);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth hook to consume the AuthContext
export const useAuth = () => useContext(AuthContext);