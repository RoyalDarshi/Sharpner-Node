const path = require("path");
const fs = require("fs");

const rootDir = require("../util/path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const data = req.body.title;
  console.log(req.body);
  fs.writeFile("user.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
};

exports.shop = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
