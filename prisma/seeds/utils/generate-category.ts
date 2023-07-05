import { faker } from '@faker-js/faker';
import { Category } from '@prisma/client';

export const generateCategory = async (
  prisma: any,
  override?: Partial<Category>,
): Promise<Category> => {
  const data = {
    id: faker.string.uuid(),
    name: faker.word.words(1),
  };

  const category = await prisma.category.create({
    data: {
      ...data,
      ...override,
    },
  });

  return category;
};
