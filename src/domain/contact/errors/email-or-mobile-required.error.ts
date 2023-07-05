import { UnprocessableEntityError } from '@domain/common/errors/unprocessable-entity.error';
import { ErrorBag } from '@domain/common/types/error-bag';

export class EmailOrMobileRequiredError extends UnprocessableEntityError {
  constructor() {
    const errors: ErrorBag = [
      { field: 'email', message: 'informe email ou celular' },
      { field: 'mobile', message: 'informe celular ou email' },
    ];
    super(errors);
  }
}
