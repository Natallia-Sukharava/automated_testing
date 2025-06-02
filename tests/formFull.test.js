import 'allure-playwright';
import { test, expect } from '@playwright/test';
import FormPage from '../src/pageObjects/FormPage.js';
import { createUser } from '../src/helpers/UserCreator.js';
import { faker } from '@faker-js/faker';
import path from 'path';

test.describe('Practice Form Full Test', () => {
  test('should fill full form and submit successfully', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.goto();

    const user = createUser({
      phone: faker.string.numeric(10)
    });

    const formData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: 'Female',
      mobile: user.phone,
      birthDate: { day: '15', month: '5', year: '1986' },
      subjects: ['Maths', 'English'],
      hobbies: ['Reading', 'Music'],
      picturePath: path.resolve('tests/fixtures/test-image.jpg'),
      address: 'Some Street 123',
      state: 'NCR',
      city: 'Delhi'
    };

    await formPage.fillFullForm(formData);
    await formPage.submitButton.scrollIntoViewIfNeeded();
    await formPage.submitButton.click({ force: true });

    await expect(formPage.modal).toBeVisible({ timeout: 10000 });

    const result = await formPage.getResultText();
    expect(result).toContain(formData.firstName);
    expect(result).toContain(formData.lastName);
    expect(result).toContain(formData.email);
    expect(result).toContain(formData.mobile);

    await formPage.closeModal();
  });
});
