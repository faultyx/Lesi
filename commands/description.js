const Users = require("../models/users");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
    if (cooldown(msg, "description", 30000, "30 seconds")) {
    Users.findOne({
      userID: msg.author.id
    }, (err, settings) => {
      if (!args[0]) {
        return msg.reply(`**Your current description:**\n${settings.description}`);
      } else {
        let newDescription = args.join(" ");
        if (newDescription.length > 40) return msg.reply("Your description is too long! Please make it under 40 characters.");
        Users.updateOne({userID: msg.author.id, description: newDescription}).then(() => msg.reply("Successfully updated your description!"));
      }
    });
   };
  }
};
module.exports.help = {
  nam: "description",
  mod: "guild",
  desc: "See your current description or set a new one.",
  usa: "[prefix]description [no args or args]",
  exa: [">description or >description Heyy!"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
