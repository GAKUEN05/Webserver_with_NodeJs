var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //class and not object
const http = require("http");

class Logger extends EventEmitter {
  constructor() {
    super(); // Call the parent class constructor
    this.server = http.createServer((req, res) => {
      if (req.url === "/") {
        res.write("Hello World");
        res.end();
      }

      if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
      }
    });
  }

  log(message) {
    console.log(message);
    this.emit("message logged", { id: 1, url: "http://" });
    this.emit("logging", { data: message }); // Emit the logging event with the actual message data
  }

  connect(port) {
    this.server.listen(port);
    console.log("Listening on port", port);
  }
}

module.exports = Logger;
