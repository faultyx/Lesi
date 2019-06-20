const keys = require("../keys"),
ids = require("../ids");
module.exports.run = async (client, msg) => {

  if (msg.author.bot) return;

  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = msg.content.match(prefixMention) ? msg.content.match(prefixMention)[0] : keys.defaultPrefix;

  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  cmd.run(client, msg, args, ids, keys);

};
