import { Module } from '@nestjs/common';
import { ContactResolver } from './resolvers/contact/contact.resolver';
import { ProviderModule } from './providers/provider.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './errors/handler';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { GQLAuthGuard } from './guards/gql-auth.guard';
import { AuthResolver } from './resolvers/auth/auth.resolver';
import { UserResolver } from './resolvers/user/user.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [
    GQLAuthGuard,
    LocalStrategy,
    JwtStrategy,
    ContactResolver,
    UserResolver,
    AuthResolver,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  imports: [ProviderModule, PassportModule],
  exports: [ProviderModule],
})
export class ApplicationModule {}
