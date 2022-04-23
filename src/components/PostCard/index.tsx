import React from 'react';
import * as S from './styles';

type Props = {
  text: string;
  author: string;
}

export const PostCard: React.FC<Props> = ({ text, author }) => {
  return (
    <S.Container>
      <S.Text> {text} </S.Text>
      <S.Author> {author} </S.Author>
    </S.Container>
  );
}
