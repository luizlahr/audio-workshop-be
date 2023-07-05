import { ContactRepository } from '@domain/contact/repositories/contact.repository';
import { BrandRepository } from '@domain/equipment/repositories/brand.repository';
import { CategoryRepository } from '@domain/equipment/repositories/category.repository';
import { ModelRepository } from '@domain/equipment/repositories/model.repository';
import { OrderItemRepository } from '@domain/order/repositories/order-item.repository';
import { OrderRepository } from '@domain/order/repositories/order.repository';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { PrismaContactRepository } from '@support/db/repositories/contact/prisma-contact.repository';
import { PrismaBrandRepository } from '@support/db/repositories/equipment/prisma-brand.repository';
import { PrismaCategoryRepository } from '@support/db/repositories/equipment/prisma-category.repository';
import { PrismaModelRepository } from '@support/db/repositories/equipment/prisma-model.repository';
import { PrismaOrderItemRepository } from '@support/db/repositories/order/prisma-order-item.repository';
import { PrismaOrderRepository } from '@support/db/repositories/order/prisma-order.repository';
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
  {
    provide: CategoryRepository,
    useClass: PrismaCategoryRepository,
  },
  {
    provide: BrandRepository,
    useClass: PrismaBrandRepository,
  },
  {
    provide: ModelRepository,
    useClass: PrismaModelRepository,
  },
  {
    provide: OrderRepository,
    useClass: PrismaOrderRepository,
  },
  {
    provide: OrderItemRepository,
    useClass: PrismaOrderItemRepository,
  },
];

export const RepositoryAliases = RepositoriesProvider.map(
  (repository) => repository.provide,
);
