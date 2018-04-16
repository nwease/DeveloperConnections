const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @description: Test profile route
// @access: Public route
router.get("/test", (req, res) => res.json({ message: "Profile Works" }));

module.exports = router;
