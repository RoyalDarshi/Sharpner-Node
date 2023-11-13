const path = require("path");
const fs = require("fs");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
})

router.post("/success", (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const data = `Name: ${name}\nEmail: ${email}`;
    fs.writeFile("contact.txt", data, (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.sendFile(path.join(rootDir, "views", "success.html"));
})

module.exports = router;