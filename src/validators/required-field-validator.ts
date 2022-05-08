import { Either, failure, success } from "../types/either";

export const requiredFieldValidator = (value: string): Either<Error, void> => {
  if(!value) {
    return failure(new Error('This field is required.'));
  }

  return success(undefined);
}