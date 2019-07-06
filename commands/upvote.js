const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "upvote", 4000, "4 seconds")) {
    return msg.channel.send({
      embed: {
        color: 0x4286f4,
        timestamp: new Date(),
        title: "Upvote",
        footer: {
          text: "On DBL."
        },
        description: `**You can upvote me here:**\n[Click here](https://discordbots.org/bot/589850196675133490)`
      }
    });
  }
 }
};
module.exports.help = {
  nam: "upvote",
  mod: "dbl",
  desc: "Upvote the bot on DBL.",
  usa: "[prefix]upvote",
  exa: [">upvote"]
};
module.exports.conf = {
  aliases: ["uv"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
