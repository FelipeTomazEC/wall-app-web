import React from 'react';
import * as S from './styles';

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
}

export const TextInput: React.FC<Props> = ({ label, onChange, value }) => {
  return (
    <S.Label> {label}
      <S.Input
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        value={value}
      />
    </S.Label>
  );
}