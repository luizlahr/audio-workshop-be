import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { SupportModule } from './support/support.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'node:path';
import { ErrorFormatter } from '@application/errors/error-formatter';
import { AllExceptionsFilter } from '@application/errors/handler';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ApplicationModule,
    SupportModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: ErrorFormatter,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
