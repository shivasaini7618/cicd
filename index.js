const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! Node.js app is running 🚀");
});

// Sample API
app.get("/api/user", (req, res) => {
  res.json({
    name: "Shiva saini",
    role: "Backend Developer"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
