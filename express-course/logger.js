// added the middlewares in different file

// this is a middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // next is a must for the middleware to work properly
  next();
};

module.exports = logger;
