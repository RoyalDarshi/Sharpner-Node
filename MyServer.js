const http = require("http");
let msg = "Welcome to my Node Js project";
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/home") {
    msg = "Welcome home";
  } else if (req.url === "/about") {
    msg = "Welcome to About Us page";
  } else if (req.url === "/node") {
    msg = "Welcome to my Node Js project";
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Webpage</title></head>");
  res.write("<body><h1>" + msg + "</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(4000);
