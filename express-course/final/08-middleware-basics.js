const express = require("express");
const app = express();

// req => middleware => res

//middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // next is a must for the middleware to work properly
  next();
};

//middleware place is like follows
app.get("/", logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", logger, (req, res) => {
  res.send("About page");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
