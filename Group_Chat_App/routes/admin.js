const express = require("express");
const fs = require("fs");

const router = express.Router();

// Set up middleware to parse request body
router.use(express.urlencoded({ extended: true }));

const data = [];

router.get("/", (req, res, next) => {
  res.send(
    '<form action="/app" onSubmit="localStorage.setItem(`userName`,document.getElementById(`userName`).value)" method="POST"><input type="text" id="userName" name="userName" /><button>Login</button></form>'
  );
});

router.post("/app", (req, res, next) => {
  fs.writeFile("./Group_Chat_App/User.txt", "", (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/chat");
});

router.get("/chat", (req, res, next) => {
  res.send(
    `<p>${fs.readFileSync("./Group_Chat_App/User.txt")}</p>` +
      '<form onSubmit="document.getElementById(`chat1`).value=localStorage.getItem(`userName`)" action="/chat" method="POST"><input type="text" id="chat" name="data" /><input type="hidden" id="chat1" name="userName" /><button>Send</button></form>'
  );
});
router.post("/chat", (req, res, next) => {
  data.push(req.body.userName + ": " + req.body.data);
  fs.writeFile("./Group_Chat_App/User.txt", data.join("\n"), (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.redirect("/chat");
});

module.exports = router;
