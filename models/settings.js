const mongoose = require("mongoose");
const { defaultPrefix } = require("../keys");

const settingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  prefix: {
    type: String,
    default: defaultPrefix
  }
});

module.exports = mongoose.model("Settings", settingSchema);
