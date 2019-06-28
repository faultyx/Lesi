const Settings = require("../models/settings");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args, ids, keys) {
    if (cooldown(msg, "prefix", 4000, "4 seconds")) {
    if (msg.member.roles.has(msg.guild.roles.find(r => r.name.toLowerCase() === "moderators").id)) {
  Settings.findOne({
    guildID: msg.guild.id
  }, (err, settings) => {
  if (!args[0]) {
    return msg.channel.send(`Current Guild Prefix: \`${settings.prefix}\`\n**Please note that this command originally requires MANAGE_GUILD permissions but for DBL Testers it has been set to have Moderators role.**`);
  } else {
    let newPrefix = args.join(" ");
    Settings.updateOne({guildID: msg.guild.id, prefix: newPrefix}).then(() => msg.reply(`Set new guild prefix to: \`${newPrefix}\``));
  }
  });
} else {
  return;
}
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
