import { UnprocessableEntityError } from '@domain/common/errors/unprocessable-entity.error';
import { ErrorBag } from '@domain/common/types/error-bag';

type InvalidOrderItemProps = string[];

export class InvalidOrderItemError extends UnprocessableEntityError {
  constructor(items?: InvalidOrderItemProps) {
    const message = 'equipamento inválido';
    const errors: ErrorBag = items?.map((item) => ({
      field: item,
      message,
    }));
    super(errors);
  }
}
