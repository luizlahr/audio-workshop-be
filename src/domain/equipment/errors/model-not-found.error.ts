import { NotFoundError } from '@domain/common/errors/not-found.error';

export class ModelNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Modelo não encontrado';
    super(message);
  }
}
