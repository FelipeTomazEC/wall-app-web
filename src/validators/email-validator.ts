import { Either, failure, success } from "../types/either";
import  { validate } from 'email-validator';

export const emailValidator = (email: string): Either<Error, void> => {
  if(email?.length === 0) {
    return failure(new Error('This field is required.'));
  }

  if(!validate(email)) {
    return failure(new Error('Invalid e-mail address.'));
  }
  
  return success(undefined);
}