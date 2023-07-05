import { PrismaClient } from '@prisma/client';
import { generateBrand } from './utils/generate-brand';
import { generateCategory } from './utils/generate-category';
import { generateContact } from './utils/generate-contact';
import { generateModel } from './utils/generate-model';
import { generateUser } from './utils/generate-user';
import { hash } from './utils/hash';

const prisma = new PrismaClient();

async function main() {
  console.log('__________________________________');
  console.log('Started creating Basic Data');

  const promises = [];

  promises.push(
    generateUser(prisma, {
      name: 'admin',
      email: 'boivl@hotmail.com',
      password: hash('321321'),
    }),
  );

  promises.push(generateContact(prisma));

  promises.push(
    Promise.all([generateBrand(prisma), generateCategory(prisma)]).then(
      ([brand, category]) =>
        generateModel(prisma, {
          brand_id: brand.id,
          category_id: category.id,
        }),
    ),
  );

  await Promise.all(promises);
  console.log('Finished creating contacts');
  console.log('__________________________________');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
