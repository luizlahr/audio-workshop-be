import { ForbiddenError } from '@domain/common/errors/forbidden.error';

export class BrandNotFoundError extends ForbiddenError {
  constructor() {
    const message = 'Marca já cadastrada';
    super(message);
  }
}
