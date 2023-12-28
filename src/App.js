import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import Management from './Management';
import Register from './Register';
import Purchaser from './Purchaser';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    if (user.role === 'management') {
      return <Management />;
    } else if (user.role === 'purchaser') {
      return <Navigate to="/purchaser" replace />;
    }

    // Default fallback page if user role is not recognized
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-0 h-screen w-screen bg-gray-100">
      <Login />
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 h-screen w-screen bg-gray-100">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/management" element={<Management />} />
            <Route path="/purchaser" element={<Purchaser />} />
            <Route path="/home" element={<Management />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};


export default App;