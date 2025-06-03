import { faker } from '@faker-js/faker';
// TODO Add currentAddress and permanentAddress
// for example currentAddress: `${faker.location.city()}, faker.location.buildingNumber()`
export function createUser(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number('##########'),
    ...overrides
  };
}
