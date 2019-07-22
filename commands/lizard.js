const sf = require("snekfetch");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute: async (client, msg, args) => {
    if (cooldown(msg, "lizard", 4000, "4 seconds")) {
      try {
      const res = await sf.get("https://nekos.life/api/lizard");
      return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
        embed: {
          title: "🦎",
          color: 0xffffff,
          timestamp: new Date(),
          image: {
            url: res.body.url
          }
        }
      });
    } catch (error) {
      console.log(error);
      return msg.channel.send("There was an error trying to get a lizard image.");
    }
    }
  }
};
module.exports.help = {
  nam: "lizard",
  mod: "fun",
  desc: "Get a lizard image!",
  usa: "[prefix]lizard",
  exa: [">lizard"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
