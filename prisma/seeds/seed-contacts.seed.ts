import { PrismaClient } from '@prisma/client';
import { generateContact } from './utils/generate-contact';

const prisma = new PrismaClient();

async function main() {
  console.log('__________________________________');
  console.log('Started creating contacts');

  const [, amount] = process.argv
    .find((param) => param.includes('amount'))
    .split('=');

  const contactPromises = [];

  for (let index = 0; index < Number(amount ?? 1); index++) {
    contactPromises.push(generateContact(prisma));
  }

  await Promise.all(contactPromises);

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
