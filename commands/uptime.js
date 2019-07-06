const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
    if (cooldown(msg, "uptime", 4000, "4 seconds")) {

      const getUptime = function(ms) {
      var s = Math.floor(ms/1000); ms %= 1000;
      var m = Math.floor(s/60); s %= 60;
      var h = Math.floor(m/60); m %= 60;
      var d = Math.floor(h/24); h %= 24;
      var w = Math.floor(d/7); d %= 7;
      return `\`${w}\` weeks, \`${d}\` days, \`${h}\` hours, \`${m}\` minutes and \`${s}\` seconds`;
      };

      return msg.channel.send(`**Requested by:** ${msg.author.toString()}\n**Uptime:** ${getUptime(client.uptime)}`);
    }
  }
};
module.exports.help = {
  nam: "uptime",
  mod: "core",
  desc: "Get the uptime of the bot.",
  usa: "[prefix]uptime",
  exa: [">uptime"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
