const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.get("/", function(req, res)
// {
//   res.send("Hello World");
// });

// //SUBTRACTION
// app.post("/", function(req, res) {
//   var n1s = Number(req.body.n1s);
//   var n2s = Number(req.body.n2s);
//   var result3 = n1s-n2s;
//   res.send("The result of the expression is " + result3);
// });

//   //DIVISION
//   app.post("/", function(req, res) {
//     var n1d = parseFloat(req.body.n1d);
//     var n2d = parseFloat(req.body.n2d);
//     var result4 = n1d/n2d;
//     res.send("The result of the expression is " + result4);
//   });
//
// //MULTIPLICATION
// app.post("/", function(req, res) {
//   var n1m = parseFloat(req.body.n1m);
//   var n2m = parseFloat(req.body.n2m);
//   var result2 = n1m*n2m;
//   res.send("The result of the expression is " + result2);
// });

//CALCULATOR

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//ADDITION
app.post("/", function(req, res) {
  var n1a = Number(req.body.n1a);
  var n2a = Number(req.body.n2a);
  var result = n1a + n2a;
  res.send("The result of the expression is " + result);
  });

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
