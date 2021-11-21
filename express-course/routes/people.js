const express = require("express");
const router = express.Router();

let { people } = require("../data");

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// we remove the base and just provide the following url
//router.get("/", getPeople);
//router.post("/", createPerson);
//router.post("/postman", createPersonPostman);
//router.put("/:id", updatePerson);
// req.params.id to destruct it
//router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
