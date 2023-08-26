const mongoose = require("mongoose");
const UserSchema = require("../models/user");

require("dotenv").config();

const connectionURL = process.env.MONGO_URI;

const connection = mongoose.createConnection(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = connection.model("User", UserSchema);

module.exports = connection;
