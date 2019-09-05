const cooldown = require("../utils/Cooldown");
let responses = require("../assets/json/eightball");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "8ball", 4500, "4.5 seconds")) {
    let question = args.join(" ");
    if (!question) return msg.reply("You forgot to ask a question!");

    let answer = responses[Math.floor(Math.random() * responses.length)];
    return msg.reply(`**Question:**\n\`${question}\`\n**Answer:**\n\`${answer}\``);
  }
 }
};
module.exports.help = {
  nam: "8ball",
  mod: "fun",
  desc: "Ask the magic 8ball a question.",
  usa: "[prefix]8ball",
  exa: [">8ball"]
};
module.exports.conf = {
  aliases: ["df"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
