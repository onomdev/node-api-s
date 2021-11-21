const { raw } = require("express");
const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json data
app.use(express.json());

// since /api/people is the base url in people.js we do not provide it
app.use("/api/people", people);

app.use("/login", auth);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
