import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Loading } from '../../components/Loading';
import { PostsList } from '../../components/PostsList';
import { useAuth } from '../../contexts/Auth';
import * as S from './styles';

export const Wall: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [newMessage, setNewMessage] = useState<string>('');
  const handlePostMessage = () => {
    setNewMessage('');
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <PostsList />
        {!isAuthenticated && (
          <S.LoginMessage>
            Wanna post a message?
            <Link to="/login">Log in</Link>
          </S.LoginMessage>
        )}

        {isAuthenticated && (
          <S.InputButtonContainer>
            <S.MessageInput
              placeholder='Write your message...'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              onClick={handlePostMessage}
              isDisabled={newMessage.length === 0}
              text="Post Message"
            />
          </S.InputButtonContainer>
        )}
      </Suspense>
    </Layout>
  );
}
