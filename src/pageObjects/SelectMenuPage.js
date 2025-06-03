import BasePage from './BasePage.js';
//TODO change all functions to  selectValue(value) fo not hardcode values
export default class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectValueInput = page.locator('#withOptGroup');
    this.selectOneInput = page.locator('#selectOne');
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.multiSelectInput = page.locator('.css-2b097c-container');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/select-menu');
  }

  async selectValue() {
    await this.selectValueInput.click();
    await this.page.getByText('Group 2, option 1').click();
  }

  async selectOne() {
    await this.selectOneInput.click();
    await this.page.getByText('Other').click();
  }

  async selectOldStyle() {
    await this.oldStyleSelect.selectOption({ label: 'Green' });
  }
//TODO Move locators to the constructor and change function to the selectMultiSelect(value);
  async selectMultiSelect() {
    await this.page.locator('#react-select-4-input').fill('Black');
    await this.page.keyboard.press('Enter');
    await this.page.locator('#react-select-4-input').fill('Blue');
    await this.page.keyboard.press('Enter');
  }
}
