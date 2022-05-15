import React, { useState, useMemo } from 'react';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Layout } from '../../components/Layout';
import { PasswordInput } from '../../components/PasswordInput';
import * as S from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import { requiredFieldValidator } from '../../validators/required-field-validator';
import { FormValidator } from '../../validators/form-validator';
import { emailValidator } from '../../validators/email-validator';
import { display, Toast } from '../../components/Toast';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signUp, login } = useAuth();
  const navigate = useNavigate();
  const handleEnter = () => {
    const handleSignUpSuccess = () => {
      const handleLoginSuccess = () => navigate('/wall', { replace: true });
      const handleLoginError = () => display('error', 'Sorry! Something went wrong.');
      login(email, password, handleLoginSuccess, handleLoginError);
    };

    const handleSignUpError = (message: string) => display('error', message);
    const request = { email, password, username }; 
    signUp(request, handleSignUpSuccess, handleSignUpError);
  };

  const formValidator = useMemo(() => {
    const validator = new FormValidator();
    validator.register('username', requiredFieldValidator);
    validator.register('email', emailValidator);
    validator.register('password', requiredFieldValidator);
    return validator;
  }, []);

  return (
    <Layout>
      <Toast />
      <S.Container>
        <S.InputsContainer>
          <TextInput 
            label='Username' 
            value={username} 
            onChange={(value) => {
              setUsername(value);
              formValidator.changeValue('username', value);
            }}
            validator={requiredFieldValidator}
          />
          <TextInput 
            label='E-mail' 
            value={email} 
            onChange={(value) => {
              setEmail(value);
              formValidator.changeValue('email', value);
            }}
            validator={emailValidator}
          />
          <PasswordInput 
            label='Password' 
            value={password} 
            onChange={(value) => {
              setPassword(value);
              formValidator.changeValue('password', value);
            }}
          />
          <S.HaveAnAccount> Already have an account?{' '}
            <Link to="/login">Log In</Link>  
          </S.HaveAnAccount>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <Button 
            onClick={handleEnter} 
            text="Sign Up" 
            isDisabled={formValidator.hasInvalidField()}
          />
        </S.ButtonsContainer>
      </S.Container>
    </Layout>
  );
}