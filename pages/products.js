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

  jacketItem = {
    itemName: "Sauce Labs Fleece Jacket",
    itemDescription:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    itemPrice: "49.99",
    itemImageUrl: "/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg",
  };

  babyDressItem = {
    itemName: "Sauce Labs Onesie",
    itemDescription:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    itemPrice: "7.99",
    itemImageUrl: "/static/media/red-onesie-1200x1500.2ec615b2.jpg",
  };

  shirtItem = {
    itemName: "Test.allTheThings() T-Shirt (Red)",
    itemDescription:
      "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
    itemPrice: "15.99",
    itemImageUrl: "/static/media/red-tatt-1200x1500.30dadef4.jpg",
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

      case products.jacketItem.itemName:
        buttonIndex = 3;
        break;

      case products.babyDressItem.itemName:
        buttonIndex = 4;
        break;

      case products.shirtItem.itemName:
        buttonIndex = 5;
        break;
    }
    return buttonIndex;
  }
}
