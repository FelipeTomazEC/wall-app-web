import React, { useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';
import { useMessages } from '../../hooks/use-messages';

export const SendMessage: React.FC = () => {
  const [message, setMessage] = useState('');
  const { postNewMessage } = useMessages();
  const handlePost = () => {
    postNewMessage(message);
    setMessage('');
  };

  return (
    <S.Container>
      <S.MessageInput 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
      />
      <Button 
        text='Post message' 
        isDisabled={!message.length}
        onClick={handlePost}
      />
    </S.Container>
  );
}