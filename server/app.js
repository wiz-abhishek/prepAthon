const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const featRoutes = require("./routes/featureRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", featRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
