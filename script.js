// var a = 12;

// module.exports = a;

// var oneLinerJoke = require("one-liner-joke");
// console.log(oneLinerJoke.getRandomJoke());

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("hii ayush ji from middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("hii ayush ji 2  from middleware");
  next();
});
app.use(function (req, res, next) {
  console.log("hii ayush ji 3  from middleware");
  next();
});
app.use(function (req, res, next) {
  console.log("hii ayush ji 4  from middleware");
  next();
});

app.get("/profile", function (req, res) {
  res.send("Hello bhai from profile");
});

app.listen(3000);
