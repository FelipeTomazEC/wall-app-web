import { Either } from "./either";

export type Validator = (value: string) => Either<Error, void>;