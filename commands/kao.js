let kao = require("../assets/json/kao");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
    if (cooldown(msg, "kao", 4000, "4 seconds")) {
    let rndKao = kao[Math.floor(Math.random() * kao.length)];
    return msg.reply(rndKao);
    };
  }
};
module.exports.help = {
  nam: "kao",
  mod: "fun",
  desc: "Get a random kao face!",
  usa: "[prefix]kao",
  exa: [">kao"]
};
module.exports.conf = {
  aliases: ["kaoemoji"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
