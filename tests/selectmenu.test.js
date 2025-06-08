import 'allure-playwright';
import { test, expect } from '@playwright/test';
import SelectMenuPage from '../src/pageObjects/SelectMenuPage.js';

test.describe('Select Menu Page', () => {
  test('should select all required dropdown values', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.goto();

    await selectMenuPage.selectValue('Group 2, option 1');
    await selectMenuPage.selectOne('Other');
    await selectMenuPage.selectOldStyle('Green');
    await selectMenuPage.selectMultiSelect(['Black', 'Blue']);

    const oldStyleValue = await selectMenuPage.getOldStyleValue();
    expect(oldStyleValue).toBe('2');

    const selectedMulti = await selectMenuPage.getSelectedMultiValues();
    expect(selectedMulti).toContain('Black');
    expect(selectedMulti).toContain('Blue');
  });
});
