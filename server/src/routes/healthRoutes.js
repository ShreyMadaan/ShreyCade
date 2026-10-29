const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;

  return res.status(isConnected ? 200 : 503).json({
    success: isConnected,
    status: isConnected ? "OK" : "DEGRADED",
    message: isConnected
      ? "ShreyCade backend is running"
      : "Database unavailable",
    database: isConnected ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;