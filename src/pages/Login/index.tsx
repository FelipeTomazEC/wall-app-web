import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PasswordInput } from '../../components/PasswordInput';
import { TextInput } from '../../components/TextInput';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useAuth } from '../../contexts/Auth';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();
  const isButtonDisabled = !email || !password;
  const handleEnter = () => login(email, password);
  const handleEnterAsGuest = () => console.log('Entering as a guest...');

  return (
    <Layout>
      <S.Container>
        <S.InputsContainer>
          <TextInput label='E-mail' value={email} onChange={(value) => setEmail(value)} />
          <PasswordInput label='Password' value={password} onChange={(value) => setPassword(value)} />
          <S.NotRegisteredYet>Not registered yet? {' '}
            <Link to="/signup">Create an account</Link>
          </S.NotRegisteredYet>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <Button onClick={handleEnter} text="Enter" isDisabled={isButtonDisabled}/>
          <Button onClick={handleEnterAsGuest} text="Enter as Guest" isOutlined />
        </S.ButtonsContainer>
      </S.Container>
    </Layout>
  );
}