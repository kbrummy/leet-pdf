// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./api/auth");
// const profileRoutes = require("./api/profile");

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
// router.use("/profile", profileRoutes);

module.exports = router;