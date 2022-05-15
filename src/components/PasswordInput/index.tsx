import React, { useState } from 'react';
import * as S from './styles';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { RiAlertFill } from 'react-icons/ri';
import { withValidation } from '../../hocs/with-validation';
import { requiredFieldValidator } from '../../validators/required-field-validator';

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
}

export const PasswordInput: React.FC<Props> = ({ value, onChange, label, error }) => {
  const [revealPassword, setRevealPassword] = useState<boolean>(false);
  const theme = useTheme();
  const EyeIcon = revealPassword ? AiFillEye : AiFillEyeInvisible;
  const toggleRevealPassword = () => setRevealPassword(!revealPassword);

  return (
    <S.Label> {label}
      <S.Container hasError={!!error}>
        <S.Input
          spellCheck={false}
          type={revealPassword ? 'text' : 'password'}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        { !error && <EyeIcon color={theme.colors.black} size={22} onClick={toggleRevealPassword}/>}
        { !!error && <RiAlertFill color={theme.colors.red} size={22}/> }
      </S.Container>
      <S.ErrorMessage> {error} </S.ErrorMessage>
    </S.Label>
  );
}

export const RequiredPasswordInput = withValidation(PasswordInput, requiredFieldValidator);