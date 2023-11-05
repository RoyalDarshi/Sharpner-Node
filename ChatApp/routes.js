const fs = require("fs");

let message = "";

const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write("<body>");
    res.write(`<p>${message}</p>`);
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message" /><button>Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      message = parsedBody.split("=")[1];
      fs.writeFile("Message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.write("<html>");
  res.write("<head><title>My Page</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome to my Node JS server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   codeText: "Some code Text",
// };

exports.requestHandler = requestHandler;
exports.someText = "Some Code Text";
