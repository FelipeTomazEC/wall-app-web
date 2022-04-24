import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { authenticate } from '../services/usecases/authenticate';
import { registerUser } from '../services/usecases/register-user';

type AuthContextData = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    const result = await authenticate(email, password);
    if (result) {
      const { token, expiredInSeconds } = result;
      const expiredInMilliseconds = expiredInSeconds * 1000;
      const expiredAt = Date.now() + expiredInMilliseconds;
      localStorage.setItem("token", token);
      localStorage.setItem("expiredAt", expiredAt.toString());
      setIsAuthenticated(true);
      handleTokenExpiration(expiredAt);
    }
  }

  const signUp = async (username: string, email: string, password: string) => {
    const id = await registerUser(username, email, password);
    if (id) {
      await login(email, password);
      setIsAuthenticated(true);
    }
  }

  const handleTokenExpiration = useCallback((expiredAt: number) => {
    const expiresInMs = expiredAt - Date.now();
    setTimeout(() => {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      localStorage.removeItem('expiredAt');
    }, expiresInMs);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiredAt = parseInt(localStorage.getItem('expiredAt') ?? '0');
    const isTokenValid = !!token && expiredAt > Date.now();
    if (isTokenValid) {
      setIsAuthenticated(true);
      handleTokenExpiration(expiredAt);
    }
  }, [handleTokenExpiration]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);