import React from 'react';
import { RiAlertFill } from 'react-icons/ri';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { withValidation } from '../../hocs/with-validation';
import { requiredFieldValidator } from '../../validators/required-field-validator';
import { emailValidator } from '../../validators/email-validator';

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
  error?: string;
}

export const TextInput: React.FC<Props> = ({ label, onChange, value, error }) => {
  const theme = useTheme();

  return (
    <S.Label> {label}
      <S.Container hasError={!!error}>
        <S.Input
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          value={value}
        />
        { !!error && <RiAlertFill color={theme.colors.red} size={22}/> }
      </S.Container>
      <S.ErrorMessage> {error} </S.ErrorMessage>
    </S.Label>
  );
}

export const RequiredTextInput = withValidation(TextInput, requiredFieldValidator);

export const EmailInput = withValidation(TextInput, emailValidator);