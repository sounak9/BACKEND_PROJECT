const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Express Server</h1><input type='text' placeholder='Enter your name' />"
  );
});
app.get("/dashbord", (req, res) => {
  console.log("Dashboard route accessed");
  res.send("this is a dashboard page");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
