const router = require("express").Router();
const path = require("path");
const file = require("../../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");

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

router.post("/", (req, rest) => {
  let notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8")
  );
  console.log("19", notes);

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  notes.push(newNote);
  console.log(newNote);
  console.log(req.body);
  //info from req to the array
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
  rest.json(newNote);
  //info will be from the req.body
  //resave file where the info is from the new array
});

module.exports = router;
