import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { FaviconController } from './controllers/favicon.controller';
import { AllExceptionsFilter } from './errors/handler';
import { GQLAuthGuard } from './guards/gql-auth.guard';
import { ProviderModule } from './providers/provider.module';
import { AuthResolver } from './resolvers/auth/auth.resolver';
import { ContactResolver } from './resolvers/contact/contact.resolver';
import { EquipmentResolvers } from './resolvers/equipments';
import { OrderResolver } from './resolvers/order/order.resolver';
import { SystemResolver } from './resolvers/system/system.resolver';
import { UserResolver } from './resolvers/user/user.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [
    GQLAuthGuard,
    LocalStrategy,
    JwtStrategy,
    ContactResolver,
    UserResolver,
    OrderResolver,
    SystemResolver,
    AuthResolver,
    ...EquipmentResolvers,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  controllers: [FaviconController],
  imports: [ProviderModule, PassportModule],
  exports: [ProviderModule],
})
export class ApplicationModule {}
