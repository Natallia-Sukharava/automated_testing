import BasePage from './BasePage.js';

export default class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.cardLocator = (cardName) => this.page.locator('.card-body h5', { hasText: cardName });
    this.expandedGroupLocator = (groupName) =>
      this.page.locator(`.element-list.collapse.show .group-header:has-text("${groupName}")`);
  }

  async clickCategoryCard(category) {
    const card = this.cardLocator(category);
    await card.click();
  }

  async clickGroup(groupName) {
    const group = this.expandedGroupLocator(groupName);
    await group.click();
  }
}
