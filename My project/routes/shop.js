const express = require("express");

const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.shop);

module.exports = router;
