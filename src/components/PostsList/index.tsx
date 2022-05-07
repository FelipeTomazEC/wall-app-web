import React from 'react';
import { useMessages } from '../../hooks/use-messages';
import { PostCard } from '../PostCard';

import { Container } from './styles';

export const PostsList: React.FC = () => {
  const { messages } = useMessages();
  
  return (
    <Container>
      {messages?.map(({ id, text, username }) => (
            <li key={id}>
              <PostCard text={text} author={username} />
            </li>
          ))
      }
    </Container>
  );
}