const htmlRouter = require("express").Router();
const path = require("path");

// GET - homepage
htmlRouter.get("/", (req, res) => {
  console.log("/ route");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET - notes
htmlRouter.get("/notes", (req, res) => {
  console.log("/ notesroute");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = htmlRouter;
