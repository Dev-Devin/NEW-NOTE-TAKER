const router = require("express").Router();
const path = require("path");
const fs = require("fs");
console.log("dirname= ", __dirname);
router.get("/", (req, rest) => {
  // rest.sendFile(path.join(__dirname, ))
});

module.exports = router;
