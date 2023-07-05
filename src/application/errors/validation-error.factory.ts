import { UnprocessableEntityError } from '@domain/common/errors/unprocessable-entity.error';
import { ValidationError } from '@nestjs/common';

export function ValidationErrorFactory(errors: ValidationError[]) {
  console.log('VALIDATION-ERROR => ', errors);
  const errorBag = errors.map((error: ValidationError) => {
    if (process.env.ENV === 'dev') {
      console.log('VALIDATION-ERROR => ', error);
    }

    return {
      field: error.property,
      message: Object.values(error.constraints).join(', '),
    };
  });

  return new UnprocessableEntityError(errorBag);
}
