export default class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async clickButton(name) {
      await this.page.getByRole('button', { name }).click();
    }
  
    async clickByText(tag, text) {
      await this.page.locator(`${tag}:has-text("${text}")`).click();
    }
  
    async isVisible(selector) {
      return this.page.locator(selector).isVisible();
    }
  
    async waitForSelector(selector) {
      await this.page.waitForSelector(selector);
    }
  }
  