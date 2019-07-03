const meme = require("memejs");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "rabbit", 4000, "4 seconds")) {
    try {
    meme(function(data) {
      return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
        embed: {
          color: 0xffffff,
          timestamp: new Date(),
          title: data.title[0],
          image: {
            url: data.url[0]
          }
        }
      });
    })
  } catch (error) {
    return msg.reply("There was an error trying to get a meme image.");
  }
  }
 }
};
module.exports.help = {
  nam: "meme",
  mod: "fun",
  desc: "Get a meme image!",
  usa: "[prefix]meme",
  exa: [">meme"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
