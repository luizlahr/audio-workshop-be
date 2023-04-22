import { Module } from '@nestjs/common';
import { contactActions } from './actions/contact.actions';
import {
  RepositoriesProvider,
  RepositoryAliases,
} from './repositories.provider';
import { userActions } from './actions/user.actions';
import { authActions } from './actions/auth.actions';
import { ServiceAliases, ServicesProvider } from './services.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [
    ...contactActions,
    ...userActions,
    ...authActions,
    ...RepositoriesProvider,
    ...ServicesProvider,
  ],
  exports: [
    ...contactActions,
    ...userActions,
    ...authActions,
    ...RepositoryAliases,
    ...ServiceAliases,
  ],
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: `${process.env.JWT_EXPIRES}s`, // in seconds
      },
      secret: process.env.JWT_SECRET,
    }),
  ],
})
export class ProviderModule {}
