const express = require("express");
const store = require("store2");
const fs = require("fs");

const router = express.Router();

// Set up middleware to parse request body
router.use(express.urlencoded({ extended: true }));

const data = [];

if (!store.has("userName")) {
  router.get("/", (req, res, next) => {
    res.send(
      '<form action="/app" method="POST"><input type="text" name="userName" /><button>Login</button></form>'
    );
  });

  router.post("/app", (req, res, next) => {
    store.set("userName", req.body.userName);
    res.redirect("/chat");
  });
}

router.get("/chat", (req, res, next) => {
  if (store.get("userName") === null) {
    res.redirect("/");
  }
  res.send(
    `<p>${fs.readFileSync("./Group_Chat_App/User.txt", (err) => {
      if (err) {
        console.log(err);
      }
    })}</p>` +
      '<form action="/chat" method="POST"><input type="text" name="data" /><button>Send</button></form>'
  );
});

router.post("/chat", (req, res, next) => {
  const admin = req.body;
  data.push(store.get("userName") + ":" + admin.data);
  fs.writeFile("./Group_Chat_App/User.txt", data.join("\n"), (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.redirect("/chat");
});

module.exports = router;
