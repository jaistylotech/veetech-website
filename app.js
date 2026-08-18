// cPanel Node.js App Entry Point
// This file is used by Phusion Passenger (cPanel) to start the Nitro server
import('./.output/server/index.mjs').catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
