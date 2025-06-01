import BasePage from './BasePage.js';


export default class FormPage extends BasePage {
  constructor(page) {
    super(page);
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
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.page.getByLabel(gender).click({ force: true });
    await this.mobile.fill(mobile);

    await this.dob.click();
    await this.page.locator('.react-datepicker__year-select').selectOption(birthDate.year);
    await this.page.locator('.react-datepicker__month-select').selectOption(birthDate.month);
    await this.page.locator(`.react-datepicker__day--0${birthDate.day}`).first().click();

    for (const subj of subjects) {
      await this.subjects.fill(subj);
      await this.page.keyboard.press('Enter');
    }

    for (const hobby of hobbies) {
      await this.page.getByLabel(hobby).click({ force: true });
    }

    await this.picture.setInputFiles(picturePath);
    await this.address.fill(address);

    const modal = this.page.locator('.modal-content');

    await this.state.click();
    await this.page.getByText(state, { exact: true }).click();
    await this.city.click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async submit() {
    await this.submitButton.click();
  }

  async getResultText() {
    return this.resultTable.textContent();
  }

  async isModalVisible() {
    return await this.modal.isVisible();
  }
}
