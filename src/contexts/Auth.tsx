import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { authenticate } from '../services/usecases/authenticate';
import { registerUser, RegisterUserRequest } from '../services/usecases/register-user';

type AuthContextData = {
  isAuthenticated: boolean;
  login: (email: string, password: string, onSuccess: () => void, onError: (message: string) => void) => Promise<void>;
  signUp: (request: RegisterUserRequest, onSuccess: () => void, onError: (message: string) => void) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (
    email: string,
    password: string,
    onSuccess: () => void,
    onError: (message: string) => void
  ) => {
    const handleOnSuccess = (token: string, expiredInSeconds: number) => {
      const expiredInMilliseconds = expiredInSeconds * 1000;
      const expiredAt = Date.now() + expiredInMilliseconds;
      localStorage.setItem("token", token);
      localStorage.setItem("expiredAt", expiredAt.toString());
      setIsAuthenticated(true);
      handleTokenExpiration(expiredAt);
      onSuccess();
    };

    const request = { email, password };
    await authenticate(request, handleOnSuccess, onError);
  }

  const signUp = async (
    request: RegisterUserRequest, 
    onSuccess: () => void,
    onError: (message: string) => void
  ) => {
    await registerUser(request, onSuccess, onError);
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