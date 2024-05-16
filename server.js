const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./db/connect.js");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

require("dotenv").config();

connectDB();

// parse request to body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(process.env.MONGO_URL);
});
