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
    this.removeFromCartBackpackItem = this.page.locator(
      "#remove-sauce-labs-backpack"
    );
    this.numberOfItemsInCart = this.page.locator(".shopping_cart_badge");
    this.itemName = this.page.locator(".inventory_item_name").nth(0);
    this.itemDescription = this.page.locator(".inventory_item_desc").nth(0);
    this.itemPrice = this.page.locator(".inventory_item_price").nth(0);
    this.itemImageUrl = this.page.locator(".inventory_details_img").nth(0);
    this.checkOutButton = this.page.getByTestId("checkout");
    this.checkOutForm = this.page.locator(".checkout_info");
    this.checkOutFormFirstName = this.page.getByTestId("firstName");
    this.checkOutFormLastName = this.page.getByTestId("lastName");
    this.checkOutFormAdress = this.page.getByTestId("postalCode");
    this.checkOutFormContinueButton = this.page.getByTestId("continue");
    this.finishCheckoutButton = this.page.getByTestId("finish");
    this.checkoutCompleteMessage = this.page.locator(
      ".checkout_complete_container"
    );
    this.checkoutSuccessMessage = "Thank you for your order!";
    this.checkoutSuccessMessageDescription =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    this.backToProductsButton = this.page.getByTestId("back-to-products");
    this.backPackItem = {
      itemName: "Sauce Labs Backpack",
      itemDescription:
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      itemPrice: "29.99",
      itemImageUrl:
        "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
    };
  }

  async verifyCheckoutFlow() {
    const loginPage = new LoginPage(this.page);

    await this.verifyItem();

    await this.addToCartBackpackItem.click();

    await expect(this.removeFromCartBackpackItem).toBeVisible();

    await expect(this.numberOfItemsInCart).toContainText("1");

    await loginPage.shoppingCartLink.click();

    await this.verifyItem();
    await expect(this.removeFromCartBackpackItem).toBeVisible();

    await this.checkOutButton.click();
    await expect(this.checkOutForm).toBeVisible();

    await this.checkOutFormFirstName.fill("test");
    await this.checkOutFormLastName.fill("test");
    await this.checkOutFormAdress.fill("test");
    await this.checkOutFormContinueButton.click();

    await expect(this.itemName).toContainText(this.backPackItem.itemName);
    await expect(this.itemDescription).toContainText(
      this.backPackItem.itemDescription
    );
    await this.finishCheckoutButton.click();

    await expect(this.checkoutCompleteMessage).toBeVisible();
    await expect(this.checkoutCompleteMessage).toContainText(
      this.checkoutSuccessMessage
    );
    await expect(this.checkoutCompleteMessage).toContainText(
      this.checkoutSuccessMessageDescription
    );
    await expect(this.backToProductsButton).toBeVisible();
  }

  async verifyItem() {
    await expect(this.itemName).toContainText(this.backPackItem.itemName);
    await expect(this.itemDescription).toContainText(
      this.backPackItem.itemDescription
    );
    await expect(this.itemPrice).toContainText(this.backPackItem.itemPrice);
    // await expect(this.itemImageUrl).toHaveAttribute("src");
    await expect(this.page.locator("#item_4_img_link")).toHaveAttribute("src");
  }

  async checkOutFromProductPage() {
    await this.page.waitForSelector("#item_4_title_link", { timeout: 5000 });
    // await this.itemName.click();
    await this.page.locator("#item_4_img_link").click();
    
    await this.verifyItem();

    // await expect(this.addToCartBackpackItem).toBeVisible();

    // this.verifyCheckoutFlow();
  }
};


  
