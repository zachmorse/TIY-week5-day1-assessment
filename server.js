const express = require("express");
const loremIpsum = require("lorem-ipsum");
var app = express();

app.listen(8080, function() {
  console.log("server is running on port 8080");
});

app.get("/", function(req, res) {
  res.send(
    "Hello world! Append /lorem to the end of the URL to get random text. <br> Add /lorem/<number> to add as many paragraphs as you'd like."
  );
});

app.get("/lorem", function(req, res) {
  var output = loremIpsum({ count: 3, units: "paragraphs", format: "html" });
  res.send(output);
});

app.get("/lorem/:amount", function(req, res) {
  var paragraphAmount = req.params.amount;
  var output = loremIpsum({
    count: paragraphAmount,
    units: "paragraphs",
    format: "html"
  });
  res.send(output);
});
