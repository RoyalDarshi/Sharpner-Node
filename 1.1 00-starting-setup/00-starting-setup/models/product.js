const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

const filePath = path.join(rootDir, "data", "products.json");

function readFile(cb) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(data));
  });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    readFile((data) => {
      const products = data;
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    readFile((data) => {
      cb(data);
    });
  }
};
