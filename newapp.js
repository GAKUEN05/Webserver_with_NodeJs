var stuffs = require("./stuffs");
var events = require("events");
var util = require("util");

var myEmitter = new events.EventEmitter();

var person = function (name) {
  this.name = name;
};

util.inherits(person, events.EventEmitter);
var jame = new person("jame");
var arnold = new person("arnold");

var people = [jame, arnold];
people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(`${person.name} said ${msg}`);
  });
});

jame.emit("speak", "hi nodejs");

//console.log(stuffs.adder(5, 8));
//console.log(stuffs.pi);

myEmitter.on("event", (msg) => {
  console.log(stuffs.counter([1, 3, 5, 6]));
});

myEmitter.emit("event", "new event emitted");
