import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});


login(async ({ page }) => {
    const userNameInput = page.getByTestId("username");
    const passwordInput = page.getByTestId("password");
    const loginButton = page.getByTestId("login-button");

    await userNameInput.fill("standard_user");
    await passwordInput.fill("secret_sauce");
    await loginButton.click();
})

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const shoppingCartButton = page.locator("#shopping_cart_container");
  
  await login(page);

  await expect(shoppingCartButton).toBeVisible();
});

test('Login with locked out user', async ({ page }) => {
  
})
