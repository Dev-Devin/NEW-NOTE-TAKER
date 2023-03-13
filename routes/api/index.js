const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API ROUTES
router.use("/", apiRoutes);

module.exports = router;
