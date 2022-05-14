import { Validator } from "../types/validator";

type FieldName = string;

export class FormValidator {
  private readonly valuesValidator: Map<FieldName, Validator>;
  private readonly currentValues: Map<FieldName, string>;

  constructor() {
    this.valuesValidator = new Map();
    this.currentValues = new Map();
  }

  hasInvalidField(): boolean {
    return Array.from(this.valuesValidator.entries())
      .some(([field, validator]) => validator(this.currentValues.get(field)!).isFailure());
  }
  
  register(field: FieldName, validator: Validator): void {
    this.valuesValidator.set(field, validator);
    this.currentValues.set(field, '');
  }

  changeValue(field: FieldName, value: string): void {
    this.currentValues.set(field, value);
  }
}