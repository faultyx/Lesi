const cooldown = require("../utils/Cooldown");
const rp = require("random-puppy");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "boobs", 4500, "4.5 seconds")) {
    if (!msg.channel.nsfw) return msg.reply("🔞 This is not a NSFW channel.");
    var searches = [
      "boobs",
      "tits",
      "breasts",
      "nipple",
      "bust"
    ]
    let image = searches[Math.floor(Math.random() * searches.length)];
    try {
    rp(image).then(url => {
    return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
      embed: {
        color: 0xffffff,
        timestamp: new Date(),
        image: {
          url: url
        },
        footer: {
          text: "NSFW => boobs"
        }
      }
    })
  });
   } catch (error) {
    return msg.reply("There was a error trying to get a image.");
   }
  }
 }
};
module.exports.help = {
  nam: "boobs",
  mod: "nsfw",
  desc: "Get a boobs nsfw image. [18+]",
  usa: "[prefix]boobs",
  exa: [">boobs"]
};
module.exports.conf = {
  aliases: ["breasts", "tits"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
