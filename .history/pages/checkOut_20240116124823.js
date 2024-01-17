const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");

exports.Checkout = class Checkout {
  /**
   * @param {import('@playwright/test').Page} page
   */
  loginPage = new LoginPage(page);

  constructor(page) {
    this.page = page;

    this.addToCartBackpackItem = this.page.getByTestId("add-to-cart-sauce-labs-backpack");
    this.removeFromCartBackpackItem = this.page.getByTestId("remove-sauce-labs-backpack");    
    this.numberOfItemsInCart = this.page.locator(".shopping_cart_badge");    
  }

  async verifyThatUsersCanBuyAnItem(username) {
    this.loginPage.login("standard_user");
    await expect(loginPage.shoppingCartLink).toBeVisible();

    await this.addToCartBackpackItem.click();

    await expect(this.addToCartBackpackItem).toBeVisible();
    
    await expect(this.numberOfItemsInCart).toContain("1");

    await this.loginPage.shoppingCartLink.click(); 

    
  }
};
