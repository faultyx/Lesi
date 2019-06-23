let kao = require("../assets/json/kao");
module.exports = {
  execute(client, msg, args) {
    let rndKao = kao[Math.floor(Math.random() * kao.length)];
    return msg.reply(rndKao);
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
