const router = require("express").Router();
const path = require("path");
const fs = require("fs");
console.log("dirname= ", __dirname);
router.get("/", (req, rest) => {
  console.log("get all notes");
  rest.sendFile(path.join(__dirname, "../../db/db.json"));
});

router.get("/:id", (req, rest) => {
  console.log("get one notes");
  let notes = JSON.parse(fs.readFileSync("../../db/db.json", "utf-8"));
  rest.json(notes[Number(req.params.id)]);
});
module.exports = router;
