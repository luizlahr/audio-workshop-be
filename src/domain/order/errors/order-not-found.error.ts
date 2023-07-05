import { NotFoundError } from '@domain/common/errors/not-found.error';

export class OrderNotFoundError extends NotFoundError {
  constructor() {
    const message = 'OS não encontrada';
    super(message);
  }
}
