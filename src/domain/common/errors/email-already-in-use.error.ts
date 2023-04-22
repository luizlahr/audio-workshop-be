import { UnprocessableEntityError } from '@domain/common/errors/unprocessable-entity.error';
import { ErrorBag } from '@domain/common/types/error-bag';

type EmailInUserProps = {
  fieldName?: string;
};

export class EmailAlreadyInUseError extends UnprocessableEntityError {
  constructor(props?: EmailInUserProps) {
    const message = 'email já cadastrado';
    const errors: ErrorBag = [
      {
        field: props?.fieldName ?? 'email',
        message,
      },
    ];
    super(errors);
  }
}
