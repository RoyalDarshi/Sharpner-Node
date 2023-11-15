const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact");
const notFoundController = require("./controllers/404");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoute);

app.use(contactRouter);

app.use(shopRouter);

app.use("/", notFoundController.notFound);

app.listen(4000);
