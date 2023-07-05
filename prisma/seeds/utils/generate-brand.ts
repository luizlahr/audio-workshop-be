import { faker } from '@faker-js/faker';
import { Brand } from '@prisma/client';

export const generateBrand = async (
  prisma: any,
  override?: Partial<Brand>,
): Promise<Brand> => {
  const data = {
    id: faker.string.uuid(),
    name: faker.word.words(1),
  };

  const brand = await prisma.brand.create({
    data: {
      ...data,
      ...override,
    },
  });

  return brand;
};
