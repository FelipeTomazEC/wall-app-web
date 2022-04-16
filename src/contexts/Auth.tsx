import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from "react";
import { authenticate } from '../services/usecases/authenticate';
import { registerUser } from '../services/usecases/register-user';

type AuthContextData = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    const result = await authenticate(email, password);
    if(result) {
      localStorage.setItem("token", result.token);
      setIsAuthenticated(true);
    }
  }

  const signUp = async (username: string, email: string, password: string) => {
    const id = await registerUser(username, email, password);
    if(id) {
      await login(email, password);
      setIsAuthenticated(true);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signUp }}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);