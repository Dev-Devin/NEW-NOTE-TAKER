const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API ROUTES
router.use("/notes", apiRoutes);

module.exports = router;
