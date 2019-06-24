let catfact = require("../assets/json/dogfacts");
module.exports = {
  execute(client, msg, args) {
    let rndDgFt = catfact[Math.floor(Math.random() * catfact.length)];
    return msg.reply(`**Random Dog-Fact:**\n\`${rndDgFt}\``);
  }
};
module.exports.help = {
  nam: "dogfact",
  mod: "fun",
  desc: "Get a random dogfact!",
  usa: "[prefix]dogfact",
  exa: [">dogfact"]
};
module.exports.conf = {
  aliases: ["df"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
