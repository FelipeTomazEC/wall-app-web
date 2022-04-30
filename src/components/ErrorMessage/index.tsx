import React from 'react';
import Lottie, { Options } from 'react-lottie';
import * as S from './styles';
import animation from '../../assets/something-went-wrong.json';

export const ErrorMessage: React.FC = () => {
  const options: Options = {
    loop: true,
    animationData: animation,
    autoplay: true
  }

  return (
    <S.Container>
      <Lottie options={options}/>
      <S.Message> Sorry! </S.Message>
      <S.Details> Something went wrong.</S.Details>
    </S.Container>
  );
}
