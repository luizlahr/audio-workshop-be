import { ContactRepository } from '@domain/contact/repositories/contact.repository';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { PrismaContactRepository } from '@support/db/repositories/contact/prisma-contact.repository';
import { PrismaUserRepository } from '@support/db/repositories/user/prisma-user.repository';

export const RepositoriesProvider = [
  {
    provide: ContactRepository,
    useClass: PrismaContactRepository,
  },
  {
    provide: UserRepository,
    useClass: PrismaUserRepository,
  },
];

export const RepositoryAliases = RepositoriesProvider.map(
  (repository) => repository.provide,
);
