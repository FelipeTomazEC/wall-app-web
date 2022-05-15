import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PasswordInput } from '../../components/PasswordInput';
import { TextInput } from '../../components/TextInput';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useAuth } from '../../contexts/Auth';
import { emailValidator } from '../../validators/email-validator';
import { FormValidator } from '../../validators/form-validator';
import { requiredFieldValidator } from '../../validators/required-field-validator';
import { display, Toast } from '../../components/Toast';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleEnter = () => {
    const onSuccess = () => navigate('/wall', { replace: true });
    const onError = (message: string) => display('error', message);
    login(email, password, onSuccess, onError)
  }

  const handleEnterAsGuest = () => navigate('/wall', { replace: true });
  const validator = useMemo(() => {
    const formValidator = new FormValidator();
    formValidator.register('email', emailValidator);
    formValidator.register('password', requiredFieldValidator);
    return formValidator;
  }, []);
  
  useEffect(() => {
    if(isAuthenticated) {
      navigate('/wall', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <Layout>
      <Toast/>
      <S.Container onSubmit={handleEnter}>
        <S.InputsContainer>
          <TextInput 
            label='E-mail' 
            value={email} 
            onChange={(value) => {
              setEmail(value);
              validator.changeValue('email', value);
            }} 
            validator={emailValidator}
          />
          <PasswordInput 
            label='Password' 
            value={password} 
            onChange={(value) => {
              setPassword(value);
              validator.changeValue('password', value);
            }} 
          />
          <S.NotRegisteredYet>Not registered yet? {' '}
            <Link to="/signup">Create an account</Link>
          </S.NotRegisteredYet>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <Button onClick={handleEnter} text="Enter" isDisabled={validator.hasInvalidField()}/>
          <Button onClick={handleEnterAsGuest} text="Enter as Guest" isOutlined />
        </S.ButtonsContainer>
      </S.Container>
    </Layout>
  );
}