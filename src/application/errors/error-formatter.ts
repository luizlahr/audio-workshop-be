import { CustomError } from '@domain/common/errors/custom.error';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

export const ErrorFormatter = (
  formattedError: GraphQLFormattedError,
  error: GraphQLError,
) => {
  if (process.env.ENV === 'dev') {
    console.log(
      `${formattedError?.path ?? error?.extensions?.code} | ERROR => `,
      JSON.stringify({
        ...error,
      }),
    );
  }

  if (error.originalError instanceof CustomError) {
    return new GraphQLError(error.originalError.message, {
      extensions: {
        ...error.extensions,
        original: error.extensions.code,
      },
    });
  }

  if (error.extensions.code === 'BAD_USER_INPUT') {
    return new GraphQLError('BAD USER REQUEST', {
      extensions: {
        code: 'BAD_USER_REQUEST',
        original: error.message.replace(/\"/g, ''),
      },
    });
  }

  return error.originalError;
};
