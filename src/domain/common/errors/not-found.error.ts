import { CustomError } from './custom.error';
import { ErrorCodes } from './error-codes';

export class NotFoundError extends CustomError {
  constructor(message: string) {
    const code = ErrorCodes.NOT_FOUND;

    super(message, code);
  }
}
