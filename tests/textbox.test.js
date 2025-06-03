import 'allure-playwright';
import { test, expect } from '@playwright/test';
import TextBoxPage from '../src/pageObjects/TextBoxPage.js';
import { createUser } from '../src/helpers/UserCreator.js';

test.describe('Text Box Form', () => {
  test('should fill form with random data and verify output', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();

    const user = createUser();
//TODO do not hardcode values
    const formData = {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      currentAddress: '123 Main St',
      permanentAddress: '456 Secondary Ave'
    };

    await textBoxPage.fillForm(formData);
    await textBoxPage.submit();

    const output = await textBoxPage.getOutputText();

    expect(output).toContain(formData.fullName);
    expect(output).toContain(formData.email);
    expect(output).toContain(formData.currentAddress);
    expect(output).toContain(formData.permanentAddress);
  });
});
