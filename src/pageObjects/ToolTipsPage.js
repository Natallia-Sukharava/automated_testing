import BasePage from './BasePage.js';

export default class ToolTipsPage extends BasePage {
  constructor(page) {
    super(page);
    this.toolTipButton = page.locator('#toolTipButton');
    this.toolTipTextField = page.locator('#toolTipTextField');
    this.toolTipLink1 = page.locator('#toolTipContrary');
    this.toolTipLink2 = page.locator('#toolTip1');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/tool-tips');
    await this.toolTipButton.waitFor();
    await this.toolTipTextField.waitFor();
  }

  async hoverAndGetTooltipText(locator) {
    await this.page.mouse.move(0, 0);
    await this.page.waitForSelector('.tooltip-inner', { state: 'hidden' }).catch(() => {});

    await locator.scrollIntoViewIfNeeded();
    await locator.waitFor({ state: 'visible', timeout: 10000 });
    await locator.hover();
    await this.page.waitForSelector('.tooltip-inner', { state: 'visible' });

    const text = await this.page.locator('.tooltip-inner').first().textContent();
    await this.page.mouse.move(0, 0);
    await this.page.waitForSelector('.tooltip-inner', { state: 'hidden' }).catch(() => {});

    return text;
  }
}
