export class Products {
  backPackItem = {
    itemName: "Sauce Labs Backpack",
    itemDescription:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    itemPrice: "29.99",
    itemImageUrl: "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
  };

  bikeLightItem = {
    itemName: "Sauce Labs Bike Light",
    itemDescription:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    itemPrice: "9.99",
    itemImageUrl: "/static/media/bike-light-1200x1500.37c843b0.jpg",
  };

  tShirtItem = {
    itemName: "Sauce Labs Bolt T-Shirt",
    itemDescription:
      "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    itemPrice: "15.99",
    itemImageUrl: "/static/media/bolt-shirt-1200x1500.c2599ac5.jpg",
  };

  setButtonIndex(itemObject) {
    const products = new Products();
    let buttonIndex;

    switch (itemObject.itemName) {
      case products.backPackItem.itemName:
        buttonIndex = 0;
        break;

      case products.bikeLightItem.itemName:
        buttonIndex = 1;
        break;

      case products.tShirtItem.itemName:
        buttonIndex = 2;
        break;
    }
    return buttonIndex;
  }
}
