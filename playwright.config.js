import { defineConfig, devices } from '@playwright/test';
import 'allure-playwright';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    actionTimeout: 0,
    baseURL: 'https://demoqa.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  use: {
    baseURL: 'https://demoqa.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop 1920x1080 (Chrome)',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Desktop 1366x768 (Firefox)',
      use: {
        browserName: 'firefox',
        viewport: { width: 1366, height: 768 },
      },
    },
  ],
  reporters: [
    ['list'],
    ['allure-playwright'],
  ],
});
