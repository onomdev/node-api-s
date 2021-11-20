const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//uses the middleware in all of them
//order matters here, if placed under home page it wont work for it
// they will be invoked in the order inside the array

// 1. use vs route
// 2. options - our own / express / third party
// app.use([logger, authorize]);

// req => middleware => res

// .static is a built in middleware
// app.use(express.static('./public'))

app.use(morgan("tiny"));

//middleware place is like follows
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
