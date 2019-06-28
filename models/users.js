const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  userID: String,
  description: {
    type: String,
    default: "No description was set."
  }
});

module.exports = mongoose.model("Users", usersSchema);
