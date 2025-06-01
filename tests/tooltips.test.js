import 'allure-playwright';
import { test, expect } from '@playwright/test';
import ToolTipsPage from '../src/pageObjects/ToolTipsPage.js';

test.describe('Tool Tips', () => {
  test('should display correct tooltip texts', async ({ page }) => {
    const toolTipsPage = new ToolTipsPage(page);
    await toolTipsPage.goto();

    const buttonTooltip = await toolTipsPage.hoverAndGetTooltipText(toolTipsPage.toolTipButton);
    expect(buttonTooltip).toBe('You hovered over the Button');

    const textFieldTooltip = await toolTipsPage.hoverAndGetTooltipText(toolTipsPage.toolTipTextField);
    expect(textFieldTooltip).toBe('You hovered over the text field');

    const link1Tooltip = await toolTipsPage.hoverAndGetTooltipText(toolTipsPage.toolTipLink1);
    expect(link1Tooltip).toBe('You hovered over the Contrary');

    const link2Tooltip = await toolTipsPage.hoverAndGetTooltipText(toolTipsPage.toolTipLink2);
    expect(link2Tooltip).toBe('You hovered over the 1.10.32');
  });
});
