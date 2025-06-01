import BasePage from './BasePage.js';

export default class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.outputBox = page.locator('#output');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm({ fullName, email, currentAddress, permanentAddress }) {
    await this.fullName.fill(fullName);
    await this.email.fill(email);
    await this.currentAddress.fill(currentAddress);
    await this.permanentAddress.fill(permanentAddress);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getOutputText() {
    return await this.outputBox.textContent();
  }
}
