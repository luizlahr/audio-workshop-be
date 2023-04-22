import { ErrorBag } from '../types/error-bag';
import { CustomError } from './custom.error';
import { ErrorCodes } from './error-codes';

export class UnprocessableEntityError extends CustomError {
  private errors?: ErrorBag = [];

  constructor(errors?: ErrorBag) {
    const code = ErrorCodes.UNPROCESSABLE_ENTITY;

    super('Validation error', code);
    this.errors = errors;
  }

  public getErrorBag(): ErrorBag {
    return this.errors;
  }
}
