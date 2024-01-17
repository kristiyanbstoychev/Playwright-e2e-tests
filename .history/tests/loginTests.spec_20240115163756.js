import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const shoppingCartButton = page.locator("#shopping_cart_container");
  
  await login(page, "standard_user");

  await expect(shoppingCartButton).toBeVisible();
});

test('Login with locked out user', async ({ page }) => {
    const lockedOutErrorMessage = page.getByTestId("error");
    await login(page, "locked_out_user");

    await expect(lockedOutErrorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
})

