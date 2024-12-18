import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const baseUrl = 'https://api.voice.aismith.co/api';
  const loginUrl = `${baseUrl}/login`;
  const signupUrl = `${baseUrl}/signup`;

  const login = async (email: string, password: string) => {
    // TODO: Implement actual login logic with API
    axios.post(
      loginUrl,
      {
        username: email,
        password: password,
      }
    )
    .then(
      function (response) {
        localStorage.setItem("access_token", response.data.access_token);
      }
    )
    .finally(() => {
      setIsAuthenticated(true);
      navigate('/assistants');
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // TODO: Implement actual signup logic with API
    setIsAuthenticated(true);
    navigate('/assistants');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};