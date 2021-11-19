const express = require("express");
const app = express();

//home page
app.get("/", (req, res) => {
  res.status(200).send("<h1>home page</h1>");
});
//about page
app.get("/about", (req, res) => {
  res.status(200).send("<h1>about page</h1>");
});
// 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// app.get  read data
// app.post  insert data
// app.put   update data
// app.delete  delete data
// app.all
// app.use
// app.listen
