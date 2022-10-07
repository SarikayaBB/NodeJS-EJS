const express = require("express");
const bodyParser = require("body-parser");
const {parse} = require("path");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

app.get("/", function (req, res) {
  res.render("index.ejs",{buttonBaslik:'Bilo'});
});

app.post("/", function (req, res) {});

app.listen(3000, () => console.log("Server is online and listening at port 3000."));

// app.listen(3000, function () {
//   console.log("Server is online and listening at port 3000.");
// });
