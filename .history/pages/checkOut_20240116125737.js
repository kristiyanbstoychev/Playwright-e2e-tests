const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");

exports.Checkout = class Checkout {
  /**
   * @param {import('@playwright/test').Page} page
   */
  

  constructor(page) {
    this.page = page;

    this.addToCartBackpackItem = this.page.locator(
      "#add-to-cart-sauce-labs-backpack"
    );
    this.removeFromCartBackpackItem = this.page.locator("#remove-sauce-labs-backpack");    
    this.numberOfItemsInCart = this.page.locator(".shopping_cart_badge");    
    this.cartItem = this.page.locator(".inventory_item_name");    
  }

  async verifyThatUsersCanBuyAnItem() {
    await this.addToCartBackpackItem.click();

    await expect(this.addToCartBackpackItem).toBeVisible();
    
    await expect(this.numberOfItemsInCart).toContain("1");

    await this.loginPage.shoppingCartLink.click(); 

    await expect(this.cartItem).toContainText("Sauce Labs Backpack");
  }
};
