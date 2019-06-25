const Discord = require("discord.js");

module.exports = {
  execute: async (client, msg, args, ids, keys) => {
  function clean(text) {
  if (typeof(text) === "string")
  return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}
  if (msg.author.id !== keys.developerID) {
      return;
    }
    let evaluateCode = args.join(" ");
    if (!evaluateCode) {
      return msg.reply("Please give some code to evaluate!");
    };

    try {

      var evaled = eval(evaluateCode);

      if (typeof evaled !== "string")
     evaled = require("util").inspect(evaled);
     if (evaled.includes(client.token)) {
       return;
      };

      if (evaled.length > 1020) {
        evaled = evaled.substr(0, 990);
      };

      msg.react("✅");

      msg.channel.send({
        embed: {
          color: 0xffffff,
          timestamp: new Date(),
          footer: {
            text: msg.author.tag,
            icon_url: msg.author.avatarURL
          },
          fields: [
            {
              name: ":inbox_tray: **Input:**",
              value: "```" + evaluateCode + "```",
              inline: true
            },
            {
              name: ":outbox_tray: **Output:**",
              value: "```" + clean(evaled) + "```",
              inline: true
            }
          ]
        }
      });

    } catch (err) {

      msg.react("❎");

      msg.channel.send({
        embed: {
          color: 0xf4281d,
          timestamp: new Date(),
          footer: {
            text: msg.author.tag,
            icon_url: msg.author.avatarURL
          },
          fields: [
            {
              name: ":inbox_tray: **Input:**",
              value: "```" + evaluateCode + "```",
              inline: true
            },
            {
              name: ":outbox_tray: **Output:**",
              value: "```" + clean(err) + "```",
              inline: true
            }
          ]
        }
      });
    }

  }
};
module.exports.help = {
  nam: "eval",
  mod: "core",
  desc: "Evaluate js code.",
  usa: "[prefix]eval [code]",
  exa: [">eval client.ping"]
};
module.exports.conf = {
  aliases: [],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: true,
  hiddenFromHelp: false
};
