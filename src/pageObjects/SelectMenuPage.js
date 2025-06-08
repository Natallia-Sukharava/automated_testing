import BasePage from './BasePage.js';

export default class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.selectValueInput = page.locator('#withOptGroup');
    this.selectOneInput = page.locator('#selectOne');
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.multiSelectInput = page.locator('#react-select-4-input');
    this.selectedMultiOutput = page.locator('.css-12jo7m5');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/select-menu');
  }

  async selectValue(optionText) {
    await this.selectValueInput.click();
    await this.page.getByText(optionText).click();
  }

  async selectOne(optionText) {
    await this.selectOneInput.click();
    await this.page.getByText(optionText).click();
  }

  async selectOldStyle(label) {
    await this.oldStyleSelect.selectOption({ label });
  }

  async selectMultiSelect(values = []) {
    for (const val of values) {
      await this.multiSelectInput.fill(val);
      await this.page.keyboard.press('Enter');
    }
  }

  async getOldStyleValue() {
    return this.oldStyleSelect.inputValue();
  }

  async getSelectedMultiValues() {
    return this.selectedMultiOutput.allTextContents();
  }
}