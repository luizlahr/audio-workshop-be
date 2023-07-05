import { UnauthorizedError } from '@domain/common/errors/unauthorized.error';

export class UnauthenticatedError extends UnauthorizedError {
  constructor() {
    const message = 'acesso inválido';
    super(message);
  }
}
