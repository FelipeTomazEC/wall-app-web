import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PostCard } from '../../components/PostCard';
import { useAuth } from '../../contexts/Auth';
import { useMessages } from '../../contexts/Messages';
import * as S from './styles';

export const Wall: React.FC = () => {
  const { messages, postNewMessage } = useMessages();
  const { isAuthenticated } = useAuth();
  const [newMessage, setNewMessage] = useState<string>('');
  const handlePostMessage = () => {
    postNewMessage(newMessage);
    setNewMessage('');
  }
  
  const PostList = useMemo(() => (
    <S.PostList>
      {messages.map(({ id, text, username }) => (
        <li key={id}>
          <PostCard text={text} author={username} />
        </li>
      ))
      }
    </S.PostList>
  ), [messages]);

  return (
    <Layout>
      {PostList}

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
    </Layout>
  );
}
