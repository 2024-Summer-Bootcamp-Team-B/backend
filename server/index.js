const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/test", function (req, res) {
  res.send("Test World!!!");
});

app.get("/test2", function (req, res) {
  res.send("Test");
});

app.listen(8000);
