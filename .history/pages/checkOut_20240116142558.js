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
    this.cartItemName = this.page.locator(".inventory_item_name");    
    this.cartItemDescription = this.page.locator(".inventory_item_desc");    
    this.cartItemPrice = this.page.locator(".inventory_item_price");    
    this.checkOutButton = this.page.getByTestId("checkout");        
    this.checkOutForm = this.page.locator(".checkout_info");    
    this.checkOutFormFirstName = this.page.locator("first-name");    
    this.checkOutFormLastName = this.page.locator("last-name");    
    this.checkOutFormAdress = this.page.locator("#postal-code");    
    this.checkOutFormContinueButton = this.page.locator("#continue");
    this.finishCheckoutButton = this.page.locator("finish");
    this.checkoutCompleteMessage = this.page.locator(
      ".checkout_complete_container"
    );
    this.backToProductsButton() = this.page.locator("back-to-products");
    this.backPackItem = {
      itemName: "Sauce Labs Backpack",
      itemDescription:
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      itemPrice: "29.99",
      itemImageUrl:
        "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
    };
  }

  async verifyThatUsersCanBuyAnItem() {
    const loginPage = new LoginPage(this.page);
    await this.addToCartBackpackItem.click();

    await expect(this.removeFromCartBackpackItem).toBeVisible();
    
    await expect(this.numberOfItemsInCart).toContainText("1");

    await loginPage.shoppingCartLink.click(); 

    await expect(this.cartItemName).toContainText(this.backPackItem.itemName);
    await expect(this.cartItemDescription).toContainText(this.backPackItem.itemDescription);
    await expect(this.cartItemPrice).toContainText(this.backPackItem.itemPrice);
    await expect(this.removeFromCartBackpackItem).toBeVisible();
    
    await this.checkOutButton.click();
    await expect(this.checkOutForm).toBeVisible();

    await this.checkOutFormFirstName.fill("test");
    await this.checkOutFormLastName.fill("test");
    await this.checkOutFormAdress .fill("test");
    await this.checkOutFormContinueButton .click();
    
    await expect(this.cartItemName).toContainText(this.backPackItem.itemName);
    await expect(this.cartItemDescription).toContainText(this.backPackItem.itemDescription);    
    await this.finishCheckoutButton.click();

    await expect(this.checkoutCompleteMessage).toBeVisible();
    await expect(this.checkoutCompleteMessage).toContainText(
      "Thank you for your order!"
    );
    await expect(this.checkoutCompleteMessage).toContainText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    await expect(this.backToProductsButton).toBeVisible();
  }
};
