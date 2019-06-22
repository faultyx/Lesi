const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  prefix: {
    type: String,
    default: ">"
  }
});

module.exports = mongoose.model("Settings", settingSchema);
