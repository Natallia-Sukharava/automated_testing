import 'allure-playwright';
import { test, expect } from '@playwright/test';
import SelectMenuPage from '../src/pageObjects/SelectMenuPage.js';

test.describe('Select Menu Page', () => {
  test('should select all required dropdown values', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.goto();

    await selectMenuPage.selectValue();
    await selectMenuPage.selectOne();
    await selectMenuPage.selectOldStyle();
    await selectMenuPage.selectMultiSelect();

    const oldStyleValue = await page.locator('#oldSelectMenu').inputValue();
    expect(oldStyleValue).toBe('2'); 


    const selectedMulti = await page.locator('.css-12jo7m5').allTextContents();
    expect(selectedMulti).toContain('Black');
    expect(selectedMulti).toContain('Blue');
  });
});
