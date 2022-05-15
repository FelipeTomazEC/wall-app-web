import React from 'react';
import { toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from './styles';

export const Toast: React.FC = () => {
  return (
      <S.Container
        position='bottom-center'
      />
  );
}

export const display = (type: TypeOptions, message: string) => {
  switch(type) {
    case 'info': 
      return toast.info(message);
    case 'error': 
      return toast.error(message);
    case 'success':
      return toast.success(message);
    case 'warning':
      return toast.warning(message);
    default:
      return toast.info(message);
  }
} 


