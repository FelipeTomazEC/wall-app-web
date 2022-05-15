import React, { useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';
import { useMessages } from '../../hooks/use-messages';
import { Toast, display } from '../Toast';

export const SendMessage: React.FC = () => {
  const [message, setMessage] = useState('');
  const { postNewMessage } = useMessages();
  const handlePost = () => {
    const onSuccess = () => display('success', 'Cool! Your post has been added to the wall.');
    const onError = (message: string) => display('error', message);
    postNewMessage(message, onSuccess, onError);
    setMessage('');
  };

  return (
    <S.Container>
      <Toast />
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