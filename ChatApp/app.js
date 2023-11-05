const http = require("http");

const reqHandler = require("./routes");

console.log(reqHandler.someText);
const server = http.createServer(reqHandler.requestHandler);
server.listen(4000);
