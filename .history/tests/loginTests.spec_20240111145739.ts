import { test, expect } from '@playwright/test';

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

test('Navigate and assert title', async ({ page }) => {

  await expect(page).toHaveTitle('Swag Labs');
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await expect(page).toHaveTitle('Swag Labs');
});