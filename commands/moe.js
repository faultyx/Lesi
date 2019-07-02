const rp = require("random-puppy");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "moe", 4000, "4 seconds")) {
    rp("awwnime")
    .then(url => {
      return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
        embed: {
          color: 0xffffff,
          timestamp: new Date(),
          image: {
            url: url
          }
        }
      })
    });
  }
 }
};
module.exports.help = {
  nam: "moe",
  mod: "anime",
  desc: "See a moe :)",
  usa: "[prefix]moe",
  exa: [">moe"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
