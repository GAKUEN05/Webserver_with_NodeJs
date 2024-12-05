var express = require("express");

var app = express();

var bodyParser = require("body-parser");
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

//serving static files
app.use("/assets", express.static("assets"));

//reponding to a get request
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact", { qs: req.query });
});

// POST /contact gets urlencoded bodies
app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("contact-sucess", { data: req.body });
});

app.get("/profile/:id", (req, res) => {
  //inserting more data into a view
  var data = {
    age: 29,
    job: "developer",
    hobbies: ["sports", "travelling", "eating"],
  };
  res.render("profile", {
    person: req.params.id,
    data: data,
  });
});

app.listen(3000);
