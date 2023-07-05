import { CustomError } from './custom.error';
import { ErrorCodes } from './error-codes';

export class ForbiddenError extends CustomError {
  constructor(message: string) {
    const code = ErrorCodes.FORBIDDEN;

    super(message, code);
  }
}
