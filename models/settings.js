const mongoose = require("mongoose");
const { defaultPrefix } = require("../keys");

const settingSchema = mongoose.Schema({
  guildID: String,
  prefix: {
    type: String,
    default: defaultPrefix
  },
  modules: {
    fun: String,
    guild: String
  }
});

module.exports = mongoose.model("Settings", settingSchema);
