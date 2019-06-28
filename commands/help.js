const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
    if (cooldown(msg, "help", 4000, "4 seconds")) {
    if (!args[0]) {
      msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
        embed: {
          color: 0xffffff,
          timestamp: new Date(),
          fields: [
            {
              name: "Help:",
              value: "\`help\`"
            },
            {
              name: "Fun:",
              value: "\`bird, dog, catfact, dogfact, kao, hi\`"
            },
            {
              name: "Core:",
              value: "\`ping\`"
            },
            {
              name: "Guild:",
              value: "\`prefix\`"
            }
          ]
        }
      })
    } else {
      let command = args[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command)
        msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
          embed: {
            color: 0xffffff,
            timestamp: new Date(),
            description: `**Mod:** \`${command.help.mod}\`\n**Desc:** \`${command.help.desc}\`\n**Usa:** \`${command.help.usa}\`\n**Exa:** \`${command.help.exa}\`\n**Aliases:** \`${command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "None"}\`\n**Guild Only:** \`${command.conf.guildOnly ? "Yes" : "No"}\``
      }

    })
  }
}
   };
  }
};
module.exports.help = {
  nam: "help",
  mod: "core",
  desc: "Get help on the bot.",
  usa: "[prefix]help",
  exa: [">help"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
