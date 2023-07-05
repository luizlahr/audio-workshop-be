import { UnauthorizedError } from '@domain/common/errors/unauthorized.error';

export class InvalidCredentialsError extends UnauthorizedError {
  constructor() {
    const message = 'credenciais inválidas';
    super(message);
  }
}
