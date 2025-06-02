import 'allure-playwright';
import { test, expect } from '@playwright/test';
import ToolTipsPage from '../src/pageObjects/ToolTipsPage.js';

test.describe('Tool Tips', () => {
  test('should display tooltip for button and text field', async ({ page }) => {
    const toolTipsPage = new ToolTipsPage(page);
    await toolTipsPage.goto();

    await toolTipsPage.hoverElement('button');
    const buttonTooltip = await toolTipsPage.getTooltipText('You hovered over the Button');
    expect(buttonTooltip).toBe('You hovered over the Button');

    await toolTipsPage.hoverElement('field');
    const fieldTooltip = await toolTipsPage.getTooltipText('You hovered over the text field');
    expect(fieldTooltip).toBe('You hovered over the text field');
  });
});
