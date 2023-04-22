import { NotFoundError } from '@domain/common/errors/not-found.error';

export class UserNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Usuário não encontrado';
    super(message);
  }
}
