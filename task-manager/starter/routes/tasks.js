const express = require("express");
const router = express.Router();

router.route("/", (req, res) => {
  res.send("all items");
});

module.exports = router;
