const fs = require("fs");
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const data = req.body.title;
  console.log(req.body);
  fs.writeFile("user.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});

module.exports = router;