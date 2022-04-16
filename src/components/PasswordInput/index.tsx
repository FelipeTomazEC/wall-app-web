import React, { useState } from 'react';
import * as S from './styles';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useTheme } from 'styled-components';

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const PasswordInput: React.FC<Props> = ({ value, onChange, label }) => {
  const [revealPassword, setRevealPassword] = useState<boolean>(false);
  const theme = useTheme();
  const EyeIcon = revealPassword ? AiFillEye : AiFillEyeInvisible;
  const toggleRevealPassword = () => setRevealPassword(!revealPassword);

  return (
    <S.Label> {label}
      <S.Container>
        <S.Input
          spellCheck={false}
          type={revealPassword ? 'text' : 'password'}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <EyeIcon color={theme.colors.black} size={22} onClick={toggleRevealPassword}/>
      </S.Container>
    </S.Label>
  );
}