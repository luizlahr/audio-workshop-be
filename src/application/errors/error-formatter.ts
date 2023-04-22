import { CustomError } from '@domain/common/errors/custom.error';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import path from 'node:path';

export const ErrorFormatter = (
  formattedError: GraphQLFormattedError,
  error: GraphQLError,
) => {
  if (error.originalError instanceof CustomError) {
    const scriptName = path.basename(__filename);
    if (process.env.ENV === 'dev') {
      console.log(`${scriptName} | Error`, error);
    }
    return new GraphQLError(error.originalError.message, {
      extensions: {
        ...error.extensions,
        original: error.extensions.code,
      },
    });
  }
  return error.originalError;
};
