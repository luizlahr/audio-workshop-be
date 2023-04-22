import { CustomError } from './custom.error';
import { ErrorCodes } from './error-codes';

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    const code = ErrorCodes.UNAUTHORIZED;

    super(message, code);
  }
}
