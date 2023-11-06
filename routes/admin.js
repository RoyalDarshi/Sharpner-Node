const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/shop/product" method="POST"><input type="text" name="prodName" /><input type="number" name="Qty" /><button type="submit">Submit Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
