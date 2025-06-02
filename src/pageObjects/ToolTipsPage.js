import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

export default class ToolTipsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.selectors = {
      button: page.locator('#toolTipButton'),
      field: page.locator('#toolTipTextField'),
      contrary: page.locator('#toolTipContrary'),
      number: page.locator('#toolTip1'),
      tooltip: page.locator('.tooltip-inner')
    };
  }

  async goto() {
    await this.page.goto('https://demoqa.com/tool-tips');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async hoverElement(key) {
    const locator = this.selectors[key];

    await locator.scrollIntoViewIfNeeded().catch(() => {});
    await locator.waitFor({ state: 'visible', timeout: 5000 });

    await locator.hover({ force: true });
    await this.page.waitForSelector('.tooltip-inner', { state: 'visible', timeout: 5000 });
  }

  async getTooltipText(expectedText) {
    const tooltip = this.selectors.tooltip.filter({ hasText: expectedText });
    await expect(tooltip).toBeVisible({ timeout: 5000 });
    return (await tooltip.textContent()).trim();
  }
}
