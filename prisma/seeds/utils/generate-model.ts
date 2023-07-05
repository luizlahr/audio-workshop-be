import { faker } from '@faker-js/faker';
import { Model } from '@prisma/client';
import { generateBrand } from './generate-brand';
import { generateCategory } from './generate-category';

export const generateModel = async (
  prisma: any,
  override?: Partial<Model>,
): Promise<Model> => {
  const brand = await generateBrand(prisma);
  const category = await generateCategory(prisma);

  const modelData: Partial<Model> = {
    id: faker.string.uuid(),
    name: faker.word.words(1),
    brand_id: brand.id,
    category_id: category.id,
  };

  const model = await prisma.model.create({
    data: {
      ...modelData,
      ...override,
    },
  });

  return model;
};
