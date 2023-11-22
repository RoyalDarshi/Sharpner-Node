const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

const filePath = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
  static addToCart(prodId, prodPrice) {
    fs.readFile(filePath, (err, data) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }
      const existingProdIndex = cart.products.findIndex(
        (prod) => prod.id === prodId
      );
      const existingProd = cart.products[existingProdIndex];
      let updatedProd;
      if (existingProd) {
        updatedProd = { ...existingProd };
        updatedProd.qty++;
        cart.products[existingProdIndex] = updatedProd;
      } else {
        updatedProd = { id: prodId, qty: 1 };
        cart.products = [...cart.products, updatedProd];
      }
      cart.totalPrice = cart.totalPrice + +prodPrice;
      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
};
