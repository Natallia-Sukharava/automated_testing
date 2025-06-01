import { faker } from '@faker-js/faker';

export function createUser(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number('##########'),
    ...overrides
  };
}
