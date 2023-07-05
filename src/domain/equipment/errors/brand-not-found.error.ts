import { NotFoundError } from '@domain/common/errors/not-found.error';

export class BrandNotFoundError extends NotFoundError {
  constructor() {
    const message = 'Marca não encontrada';
    super(message);
  }
}
