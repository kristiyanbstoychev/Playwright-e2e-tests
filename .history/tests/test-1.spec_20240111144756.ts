import { test, expect } from '@playwright/test';

test('Navigate and assert title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect(page).toHaveTitle('Swag Labs');
});