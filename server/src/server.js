require("dotenv").config();

const dns = require("node:dns");
const http = require("node:http");
const mongoose = require("mongoose");

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Fix MongoDB Atlas SRV DNS resolution
// Configure DNS before connecting to MongoDB.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const server = http.createServer(app);

const startServer = async () => {
  try {
    // Connect to MongoDB Atlas
    await connectDB();

    // Start Express after successful DB connection
    server.listen(PORT, () => {
      console.log("=================================");
      console.log("🎮 ShreyCade Backend");
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 http://localhost:${PORT}`);
      console.log("=================================");
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

const shutdown = async () => {
  console.log("Shutting down ShreyCade backend...");

  server.close(async () => {
    await mongoose.disconnect();
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

startServer();