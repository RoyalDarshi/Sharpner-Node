const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.get("/contact", contactController.contact);

router.post("/success", contactController.success);

module.exports = router;
