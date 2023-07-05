import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import isEmailValidator from 'validator/lib/isEmail';
import type { IsEmailOptions } from 'validator/lib/isEmail';

@ValidatorConstraint({ async: true })
export class IsNullableEmailConstraint implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    if (Boolean(email) === false) {
      return true;
    }
    return isEmailValidator(email, args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'email inválido';
  }
}

export function IsNullableEmail(
  options?: IsEmailOptions,
  validationOptions?: ValidationOptions,
) {
  //eslint-disable-next-line
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsNullableEmailConstraint,
    });
  };
}
