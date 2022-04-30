import React from 'react';
import { Container } from './styles';
import Lottie, { Options } from 'react-lottie';
import animation from '../../assets/loading-animation.json';

export const Loading: React.FC = () => {
  const options: Options = {
    loop: true,
    animationData: animation,
    autoplay: true
  }

  return (
    <Container>
      <Lottie options={options}/>
    </Container>
  );
}
