const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

//BMI calculator

app.get("/bmicalculator", function(req, res)
{
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res)
{
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var n = (weight/(height*height));
  res.send("Your BMI is " + n + ".");
});

app.listen(3000, function() {
  console.log("Server is running with port 3000");
});
