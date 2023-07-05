import { faker } from '@faker-js/faker';
import { hash } from './hash';
import { User } from '@prisma/client';

export const generateUser = async (
  prisma: any,
  override?: Partial<User>,
): Promise<User> => {
  const data = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: hash('123'),
  };

  const user = await prisma.user.create({
    data: {
      ...data,
      ...override,
    },
  });

  return user;
};
