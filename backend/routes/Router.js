const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));

router.use("/api/photos", require("./PhotoRoutes"));

router.get("/", (req, res) => {
  res.send("api work");
});

module.exports = router;