import { NotFoundError } from '@domain/common/errors/not-found.error';

export class ContactNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Contato não encontrado';
    super(message);
  }
}
