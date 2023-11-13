const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const adminRoute = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoute);

app.use(contactRouter);

app.use(shopRouter);

app.use("/", (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
})

app.listen(4000);