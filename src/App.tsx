import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { AuthProvider } from './contexts/Auth';
import { SignUp } from './pages/SignUp';
import { MessagesProvider } from './contexts/Messages';
import { Wall } from './pages/Wall';

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <MessagesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wall" element={<Wall />} />
            </Routes>
          </Router>
        </MessagesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
