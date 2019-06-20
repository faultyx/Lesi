const chalk = require("chalk"),
ids = require("../ids");

module.exports.run = client => {
  client.user.setPresence({
    game: {
      type: 0,
      name: `>help | On ${client.guilds.size} Servers`
    }
  });

  console.log(chalk.green("[READY]:"));

  const channel = client.channels.get(ids.temp);
  if (!channel) return;
  channel.send({
    embed: {
      color: 0x4286f4,
      timestamp: new Date(),
      title: "Restart",
      description: `I am back online and ready to serve \`${client.users.size}\` users in \`${client.guilds.size}\` servers.`,
      footer: {
        text: `${client.commands.size} Commands with ${client.aliases.size} Aliases`
      },
      thumbnail: {
        url: client.user.displayAvatarURL
      }
    }
  });
};
