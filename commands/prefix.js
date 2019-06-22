const Settings = require("../models/settings");
module.exports.run = async (client, msg, args, ids, keys) => {
  if (!msg.member.hasPermission("MANAGE_GUILD")) return;
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
module.exports.help = {
  nam: "prefix",
  mod: "core",
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
