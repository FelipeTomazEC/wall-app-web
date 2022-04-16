import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from "react";
import { authenticate } from '../services/usecases/authenticate';

type AuthContextData = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);