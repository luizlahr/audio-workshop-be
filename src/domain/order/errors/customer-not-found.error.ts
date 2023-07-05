import { NotFoundError } from '@domain/common/errors/not-found.error';

export class CustomerNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Cliente não encontrado';
    super(message);
  }
}
