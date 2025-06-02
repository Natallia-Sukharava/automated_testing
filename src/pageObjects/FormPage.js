import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

export default class FormPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.gender = (value) => page.getByLabel(value);
    this.mobile = page.locator('#userNumber');
    this.dob = page.locator('#dateOfBirthInput');
    this.subjects = page.locator('#subjectsInput');
    this.hobbies = (value) => page.getByLabel(value); 
    this.picture = page.locator('#uploadPicture');
    this.address = page.locator('#currentAddress');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.submitButton = page.locator('#submit');
    this.modal = page.locator('.modal-content');
    this.resultTable = page.locator('.table-responsive');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillFullForm(data) {
    const {
      firstName,
      lastName,
      email,
      gender,
      mobile,
      birthDate,
      subjects,
      hobbies,
      picturePath,
      address,
      state,
      city
    } = data;

    await this.firstName.fill(firstName);
    await expect(this.firstName).toHaveValue(firstName);

    await this.lastName.fill(lastName);
    await expect(this.lastName).toHaveValue(lastName);

    await this.email.fill(email);
    await expect(this.email).toHaveValue(email);

    await this.gender(gender).click({ force: true });

    await this.mobile.fill(mobile);
    await expect(this.mobile).toHaveValue(mobile);

    await this.dob.click();
    await this.page.locator('.react-datepicker__year-select').selectOption(birthDate.year);
    await this.page.locator('.react-datepicker__month-select').selectOption(birthDate.month);
    await this.page.locator(`.react-datepicker__day--0${birthDate.day}`).first().click();
    await this.page.keyboard.press('Escape');

    for (const subj of subjects) {
      await this.subjects.fill(subj);
      await this.page.keyboard.press('Enter');
    }

    for (const hobby of hobbies) {
      await this.hobbies(hobby).click({ force: true });
    }

    await this.picture.setInputFiles(picturePath);
    await this.address.fill(address);

    await this.state.click();
    await this.page.getByText(state, { exact: true }).click();

    await this.city.click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async submit() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click({ force: true });
  }

  async getResultText() {
    return this.resultTable.textContent();
  }

  async isModalVisible() {
    return await this.modal.isVisible();
  }

  async closeModal() {
    const closeBtn = this.page.locator('#closeLargeModal');
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
      await expect(this.modal).toBeHidden({ timeout: 5000 });
    }
  }
}
