let catfact = require("../assets/json/catfacts");
module.exports = {
  execute(client, msg, args) {
    let rndCtFt = catfact[Math.floor(Math.random() * catfact.length)];
    return msg.reply(`**Random Cat-Fact:**\n\`${rndCtFt}\``);
  }
};
module.exports.help = {
  nam: "catfact",
  mod: "fun",
  desc: "Get a random catfact!",
  usa: "[prefix]catfact",
  exa: [">catfact"]
};
module.exports.conf = {
  aliases: ["cf"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
