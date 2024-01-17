import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

async function login(page, username) {
  const userNameInput = page.getByTestId("username");
  const passwordInput = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");

  await userNameInput.fill(username);
  await passwordInput.fill("secret_sauce");
  await loginButton.click();
}

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

test('Login with problem user', async ({ page }) => {
      await login(page, "problem_user");

      await console.log(getImageUrl(page, "Sauce Labs Backpack"));

      // expect(imageUrl).toContain("/static/media/sl-404.168b1cce.jpg");

})  

