const ns = require("node-superfetch");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute: async (client, msg, args) => {
  if (cooldown(msg, "bird", 4000, "4 seconds")) {
  try {
  const { body } = await ns
  .get("https://shibe.online/api/birds")
  .query({
    count: 1,
    urls: true,
    httpsUrls: true
  });
  return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
    embed: {
      color: 0xffffff,
      timestamp: new Date(),
      image: {
        url: body[0]
      }
    }
  });
} catch (error) {
  console.log(error);
  return msg.channel.send("There was an error trying to get a bird image.");
}
};
  }
};
module.exports.help = {
  nam: "bird",
  mod: "fun",
  desc: "Get a bird image!",
  usa: "[prefix]bird",
  exa: [">bird"]
};
module.exports.conf = {
  aliases: ["birdy"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
