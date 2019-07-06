const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args, ids, keys) {
  if (cooldown(msg, "hi", 3000, "3 seconds")) {
  return msg.reply("Hey! >:D");
   };
  }
};

module.exports.help = {
  nam: "hi",
  mod: "fun",
  desc: "Say hi to the bot!",
  usa: "[prefix]hi",
  exa: [">hi"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
