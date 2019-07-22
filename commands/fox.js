const ns = require("node-superfetch");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute: async (client, msg, args) => {
  if (cooldown(msg, "fix", 4000, "4 seconds")) {
  try {
  const { body } = await ns.get("https://randomfox.ca/floof/");
  return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
    embed: {
      title: "🦊",
      color: 0xffffff,
      timestamp: new Date(),
      image: {
        url: body.image
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
  nam: "fox",
  mod: "fun",
  desc: "Get a fox image!",
  usa: "[prefix]fox",
  exa: [">fox"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
