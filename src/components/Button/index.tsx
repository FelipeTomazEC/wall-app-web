import React from 'react';

import { Container } from './styles';

type Props = {
  onClick: () => void;
  isOutlined?: boolean;
  text: string;
  isDisabled?: boolean;
}

export const Button: React.FC<Props> = ({ onClick, text, isOutlined = false, isDisabled = false }) => {
  return (
    <Container onClick={(e) => {
      e.preventDefault();
      onClick();
    }} isOutlined={isOutlined} disabled={isDisabled}>
      {text}
    </Container>
  );
}