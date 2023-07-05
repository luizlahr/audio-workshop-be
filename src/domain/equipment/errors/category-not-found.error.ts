import { NotFoundError } from '@domain/common/errors/not-found.error';

export class CategoryNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Categoria não encontrada';
    super(message);
  }
}
