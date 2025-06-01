import 'allure-playwright';
import { test, expect } from '@playwright/test';
import AlertsPage from '../src/pageObjects/AlertsPage.js';
import { getBrowserViewport } from '../src/helpers/TestSetups.js';

test.describe('Alerts Page', () => {
  test('should handle all alerts correctly', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.goto();

    console.log('Viewport:', getBrowserViewport());

    await alertsPage.triggerAlertAndAccept();

    await alertsPage.triggerDelayedAlertAndAccept();

    await alertsPage.triggerConfirm(true);
    await expect(alertsPage.confirmResult).toContainText('You selected Ok');

    await alertsPage.triggerConfirm(false);
    await expect(alertsPage.confirmResult).toContainText('You selected Cancel');

    const text = 'Playwright Test';
    await alertsPage.triggerPrompt(text);
    await expect(alertsPage.promptResult).toContainText(`You entered ${text}`);
  });
});
