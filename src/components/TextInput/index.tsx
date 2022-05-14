import React, { useState } from 'react';
import { success } from '../../types/either';
import { RiAlertFill } from 'react-icons/ri';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { Validator } from '../../types/validator';

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
  validator?: Validator;
}

export const TextInput: React.FC<Props> = ({ label, onChange, value, validator = () => success(undefined) }) => {
  const [error, setError] = useState<string>('');
  const theme = useTheme();

  const handleOnChange = (value: string) => {
    onChange(value);

    const validation = validator(value);
    if (validation.isFailure()) {
      setError(validation.value.message);
    } else {
      setError('');
    }
  };

  return (
    <S.Label> {label}
      <S.Container hasError={!!error}>
        <S.Input
          onChange={(e) => handleOnChange(e.target.value)}
          spellCheck={false}
          value={value}
        />
        { !!error && <RiAlertFill color={theme.colors.red} size={22}/> }
      </S.Container>
      <S.ErrorMessage> {error} </S.ErrorMessage>
    </S.Label>
  );
}