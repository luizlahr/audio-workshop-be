import { Hasher } from '@domain/common/services/hasher.service';
import { JwtGenerator } from '@domain/common/services/jwt-generator.service';
import { BcryptHasher } from '@support/services/bcrypt-hasher.service';
import { NestJsJwtService } from '@support/services/nestjs-jwt.service';

export const ServicesProvider = [
  {
    provide: Hasher,
    useClass: BcryptHasher,
  },
  {
    provide: JwtGenerator,
    useClass: NestJsJwtService,
  },
];

export const ServiceAliases = ServicesProvider.map(
  (repository) => repository.provide,
);
