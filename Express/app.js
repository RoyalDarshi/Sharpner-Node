const express = require("express");
const bodyParser = require("body-parser");

const adminReq = require("../routes/admin");
const shopReq = require("../routes/shop");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/shop", adminReq);
app.use(shopReq);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not found</h1>");
});

app.listen(4000);
