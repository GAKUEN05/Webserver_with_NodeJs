const Logger = require("./logger");
const path = require("path");

const pathObj = path.parse(__filename);
const os = require("os");
var totalmem = os.totalmem();

logger = new Logger();

//Raise: Logging (data: message)
logger.on("logging", (data) => {
  console.log("logging", data);
});

//Register a listner
logger.on("message logged", (arg) => {
  console.log("message logged", arg);
});

logger.log("message");
logger.connect(3000);
//console.log(pathObj);
//console.log("Total memory :" + totalmem);

//-------------------for new tuto
var http = require("http");

var fs = require("fs");

//to create a readable stream
/*var readstream = fs.createReadStream(__dirname + "/About.txt", "utf8");

var writestream = fs.createWriteStream(__dirname + "/write.txt");

readstream.pipe(writestream);*/

//listener for readstream

/*readstream.on("data", (chunk) => {
  console.log(`ǹew chunk received: \n ${chunk}`);
  writestream.write(chunk);
});*/

var server = http.createServer((req, res) => {
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    var readstream = fs.createReadStream(__dirname + "/index.html", "utf8");
    readstream.pipe(res);
  } else if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
      name: "arnold",
      job: "student",
      age: 16,
    };
    res.end(JSON.stringify(obj)); //sending data to a client: the end() method expects a string or a buffer
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    var readstream = fs.createReadStream(__dirname + "/error.html", "utf8");
    readstream.pipe(res);
  }
});

server.listen(3001, "localhost");
console.log("listenning to port 3001");
