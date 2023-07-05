import { faker } from '@faker-js/faker';
import { Contact } from '@prisma/client';

export const generateContact = async (
  prisma: any,
  override?: Partial<Contact>,
): Promise<Contact> => {
  const data = {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(['fisica', 'juridica']),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    nickname: faker.person.jobTitle(),
    mobile: faker.phone.number('(##) #####-####'),
    phone: faker.phone.number('(##) ####-####'),
    nid: faker.string.numeric(9),
    ssn: faker.string.numeric(11),
    addressStreet: faker.location.street(),
    addressNumber: faker.location.buildingNumber(),
    addressExtra: faker.location.secondaryAddress(),
    district: faker.location.county(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode('########'),
  };

  const contact = await prisma.contact.create({
    data: {
      ...data,
      ...override,
    },
  });

  return contact;
};
