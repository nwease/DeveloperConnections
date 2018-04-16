const express = require("express");
const router = express.Router();

// @route GET api/posts/test
// @description: Test posts route
// @access: Public route
router.get("/test", (req, res) => res.json({ message: "Posts Works" }));

module.exports = router;
