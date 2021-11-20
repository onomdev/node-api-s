const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// route param
app.get("/api/products/:productId", (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("<h1>Product not found</h1>");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  //spread operator ...
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  // shows the result of the search based on letters if theres an input of this type
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  // limits the numbers of products shown if theres an input of this type
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //res.status(200).send("<h1>no products matched your search</h1>");
    // to avoid header errors 
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
