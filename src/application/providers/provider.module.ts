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
import { equipmentActions } from './actions/equipment.actions';
import { orderActions } from './actions/order.actions';

@Module({
  providers: [
    ...contactActions,
    ...userActions,
    ...authActions,
    ...equipmentActions,
    ...orderActions,
    ...RepositoriesProvider,
    ...ServicesProvider,
  ],
  exports: [
    ...contactActions,
    ...userActions,
    ...authActions,
    ...equipmentActions,
    ...orderActions,
    ...RepositoryAliases,
    ...ServiceAliases,
  ],
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES, // in seconds
      },
      secret: process.env.JWT_SECRET,
      global: true,
    }),
  ],
})
export class ProviderModule {}
