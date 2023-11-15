const path = require("path");
const fs = require("fs");

const rootDir = require("../util/path");

exports.contact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.success = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const data = `Name: ${name}\nEmail: ${email}`;
  fs.writeFile("contact.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
