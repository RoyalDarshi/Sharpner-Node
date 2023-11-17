const express = require("express");

const prodController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", prodController.getAddProd);

// /admin/add-product => POST
router.post("/add-product", prodController.postAddProd);

exports.routes = router;
