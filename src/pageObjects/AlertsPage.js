import BasePage from './BasePage.js';

export default class AlertsPage extends BasePage {
  constructor(page) {
    super(page);
    this.alertButton = page.locator('#alertButton');
    this.timerAlertButton = page.locator('#timerAlertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton');
    this.confirmResult = page.locator('#confirmResult');
    this.promptResult = page.locator('#promptResult');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/alerts');
  }

  async triggerDelayedAlertAndAccept() {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
      this.timerAlertButton.click(),
    ]);
  }
  async triggerAlertAndAccept() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.alertButton.click();
  }  
  async triggerDelayedAlertAndAccept() {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.timerAlertButton.click(),
    ]);
    await dialog.accept();
  }

  async triggerConfirm(accept = true) {
    this.page.once('dialog', async dialog => {
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
    await this.confirmButton.click();
  }

  async triggerPrompt(text = '') {
    this.page.once('dialog', async dialog => {
      await dialog.accept(text);
    });
    await this.promptButton.click();
  }
}
