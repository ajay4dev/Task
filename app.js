const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const cmsRoutes = require("./routes/cmsRoutes");
require("dotenv").config();
const sequelize = require("./config/database");

// Initialize express
const app = express();

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cms", cmsRoutes);

// Sync DB
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
