import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Layout } from '../../components/Layout';
import { PasswordInput } from '../../components/PasswordInput';
import * as S from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isButtonDisabled = !username || !email || !password;
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const handleEnter = () => {
      signUp(username, email, password)
      .then(() => navigate('/wall', { replace: true }));
  };

  return (
    <Layout>
      <S.Container>
        <S.InputsContainer>
          <TextInput label='Username' value={username} onChange={(value) => setUsername(value)} />
          <TextInput label='E-mail' value={email} onChange={(value) => setEmail(value)} />
          <PasswordInput label='Password' value={password} onChange={(value) => setPassword(value)} />
          <S.HaveAnAccount> Already have an account?{' '}
            <Link to="/login">Log In</Link>  
          </S.HaveAnAccount>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <Button onClick={handleEnter} text="Sign Up" isDisabled={isButtonDisabled}/>
        </S.ButtonsContainer>
      </S.Container>
    </Layout>
  );
}