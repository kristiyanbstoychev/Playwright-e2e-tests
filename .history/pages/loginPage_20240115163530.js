const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.userNameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
};
