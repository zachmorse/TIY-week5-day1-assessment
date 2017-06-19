const express = require("express");
const lorem = require("lorem-ipsum");
var app = express();

app.listen(8080, function() {
  console.log("server is running on port 8080");
});
