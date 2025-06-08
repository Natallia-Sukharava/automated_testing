# Automated Testing of demoqa.com Using Playwright

## Description

This project implements automated testing of the web application demoqa.com using the Playwright framework.

Implemented features include:

- Five test scenarios: Alerts, Form, TextBox, ToolTips, SelectMenu
- Support for Google Chrome and Mozilla Firefox browsers
- Testing on two screen resolutions: 1920x1080 and 1366x768
- Page Object Model (POM) implementation
- Screenshot capture on test failure
- Integration with Allure for test reporting
- CI/CD setup via GitHub Actions

## Installation and Running

Install dependencies:

npm install

Run all tests:

npx playwright test

Run individual tests:

npx playwright test tests/alerts.test.js  
npx playwright test tests/formFull.test.js  
npx playwright test tests/textbox.test.js  
npx playwright test tests/tooltips.test.js  
npx playwright test tests/selectMenu.test.js

## Cross-Browser and Resolutions

The playwright.config.js file includes configurations for the following environments:

- Chrome with resolution 1920x1080
- Firefox with resolution 1366x768

Examples of running in specific environments:

npx playwright test --project="Desktop 1920x1080 (Chrome)"  
npx playwright test --project="Desktop 1366x768 (Firefox)"

## Reporting via Allure

To generate and view Allure reports:

npx playwright test  
npx allure generate allure-results --clean -o allure-report  
npx allure open allure-report

## Project Structure

.github/workflows/         GitHub Actions configuration  
allure-results/            Allure raw result files  
allure-report/             Allure HTML report  
node_modules/
src/  
  helpers/                 Utility modules  
  pageObjects/             POM implementation  
test-results/              Screenshots on test failure  
tests/                     Automated tests  
  fixtures/ 
playwright-report/         Playwright HTML report    
.gitignore  
package-lock.json  
package.json  
playwright.config.js       Playwright configuration  
README.md                  Project description

## CI/CD Integration

The project is configured to automatically run tests via GitHub Actions:

- on every push  
- on pull request

Test reports are saved as artifacts (allure-report folder)
