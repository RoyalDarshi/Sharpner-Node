const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In next middleware");
  res.send("<h1>Welcome to Express</h1>");
});

app.listen(4000);
