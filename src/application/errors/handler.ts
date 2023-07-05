import { CustomError } from '@domain/common/errors/custom.error';
import { ErrorCodes } from '@domain/common/errors/error-codes';
import { UnprocessableEntityError } from '@domain/common/errors/unprocessable-entity.error';
import { Catch, ExceptionFilter, UnauthorizedException } from '@nestjs/common';
import { GraphQLError } from 'graphql';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown): GraphQLError {
    if (process.env.ENV === 'dev') {
      console.log(exception);
    }

    if (exception instanceof UnauthorizedException) {
      throw new GraphQLError(exception.message, {
        extensions: {
          code: ErrorCodes.UNAUTHORIZED,
        },
      });
    }

    if (exception instanceof UnprocessableEntityError) {
      throw new GraphQLError(exception.message, {
        extensions: {
          code: exception.getCode(),
          errors: exception?.getErrorBag(),
        },
      });
    }

    if (exception instanceof CustomError) {
      throw new GraphQLError(exception.message, {
        extensions: {
          code: exception.getCode(),
        },
      });
    }

    // TODO: log the error

    throw new GraphQLError('Erro inesperado!', {
      extensions: {
        code: ErrorCodes.UNEXPECTED_SERVER_ERROR,
      },
    });
  }
}
