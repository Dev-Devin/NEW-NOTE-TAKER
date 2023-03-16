const router = require("express").Router();
const path = require("path");
const file = require("../../db/db.json");
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

rout
er.post("/", (req, rest) => {
  let notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8")
  );
  console.log("19", notes);
  notes.push("")
  console.log(req.body);
  //info from req to the array
fs.writeFile(path.join(__dirname, "../../db/db.json"))
  //info will be from the req.body
  //resave file where the info is from the new array
});

module.exports = router;
