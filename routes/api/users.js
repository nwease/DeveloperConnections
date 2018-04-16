const express = require("express");
const router = express.Router();

// @route: GET api/users/test
// @description: Test users route
// @access: Public route
router.get("/test", (req, res) => res.json({ message: "Users Works" }));

module.exports = router;
