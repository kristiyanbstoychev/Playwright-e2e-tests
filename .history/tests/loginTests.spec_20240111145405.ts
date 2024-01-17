import { test, expect } from '@playwright/test';

const { beforeEach } = require('@playwright/test');

beforeEach(async ({ page }) => {
  // Code inside this block will run before each test
  await page.goto('https://www.saucedemo.com/');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Navigate and assert title', async ({ page }) => {

  
  await expect(page).toHaveTitle('Swag Labs');
});