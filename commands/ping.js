const cooldown = require("../utils/Cooldown");
module.exports = {
  execute: async (client, msg, args, ids, keys) => {
  if (cooldown(msg, "ping", 4000, "4 seconds")) {

const message = await msg.channel.send("Ping?");
message.edit(`:ping_pong: Pong!\nMessage: \`${message.createdTimestamp - msg.createdTimestamp}ms\`
API: \`${Math.round(client.ping)}ms\``);
   }
  }
};

module.exports.help = {
  nam: "ping",
  mod: "core",
  desc: "See the message & api latency.",
  usa: "[prefix]ping",
  exa: [">ping"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
