const cooldown = require("../utils/Cooldown");
const rp = require("random-puppy");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "4k", 4500, "4.5 seconds")) {
    if (!msg.channel.nsfw) return msg.reply("🔞 This is not a NSFW channel.");
    var searches = [
        "NSFW_Wallpapers",
        "SexyWallpapers",
        "HighResNSFW",
        "nsfw_hd",
        "UHDnsfw"
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
          text: "NSFW => 4K"
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
  nam: "4k",
  mod: "nsfw",
  desc: "Get a 4K nsfw image. [18+]",
  usa: "[prefix]4k",
  exa: [">4k"]
};
module.exports.conf = {
  aliases: ["fourk"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
