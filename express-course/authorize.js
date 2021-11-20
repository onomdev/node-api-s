const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "rei") {
    req.user = { name: "rei", id: 1 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

module.exports = authorize;
