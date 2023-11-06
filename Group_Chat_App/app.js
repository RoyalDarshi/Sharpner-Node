const express = require("express");
const bodyParser = require("body-parser");

const adminReq = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded());

app.use(adminReq);

app.listen(4000);
