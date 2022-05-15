import { useState } from "react";
import { Validator } from "../types/validator";

interface InputProps {
  onChange: (value: string) => void;
  error?: string;
}

export const withValidation = <P extends InputProps>(
  Input: React.ComponentType<P>,
  validator: Validator) => (props: P) => {
    const [error, setError] = useState('');
    const validateInput = (value: string) => {
      props.onChange(value);
      const validation = validator(value);

      if (validation.isFailure()) {
        setError(validation.value.message);
      } else {
        setError('');
      }
    }

    return <Input {...props} onChange={validateInput} error={error} />
  }