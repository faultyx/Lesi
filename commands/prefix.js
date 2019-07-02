const Settings = require("../models/settings");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args, ids, keys) {
    if (cooldown(msg, "prefix", 4000, "4 seconds")) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Insufficient permissions, you need \`ADMINISTRATOR\` to use this command.");
  Settings.findOne({
    guildID: msg.guild.id
  }, (err, settings) => {
  if (!args[0]) {
    return msg.channel.send(`Current Guild Prefix: \`${settings.prefix}\``);
  } else {
    let newPrefix = args.join(" ");
    Settings.updateOne({guildID: msg.guild.id, prefix: newPrefix}).then(() => msg.reply(`Set new guild prefix to: \`${newPrefix}\``));
  }
  });
   };
  }
};
module.exports.help = {
  nam: "prefix",
  mod: "guild",
  desc: "See the current prefix or set a new one.",
  usa: "[prefix]prefix [no args or args]",
  exa: [">prefix or >prefix ?"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
