const keys = require("../keys"),
ids = require("../ids"),
chalk = require("chalk");

const Sqlite = require("../utils/Sqlite");
const Settings = require("../models/settings");
module.exports.run = async (client, msg) => {

  if (msg.author.bot) return;

  if (msg.guild && !msg.member) await msg.guild.fetchMember(msg.author);

  let findPrefix;
  Settings.findOne({
    guildID: msg.guild.id
  }, (err, settings) => {
    if (err) console.log(err);
    if (!settings) {
      findPrefix = keys.defaultPrefix;
    } else {
    findPrefix = settings.prefix;
    }

  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = msg.content.match(prefixMention) ? msg.content.match(prefixMention)[0] : findPrefix;

  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  Sqlite.get(`SELECT * FROM userblacklist WHERE snowflake = ?`, msg.author.id, (err, r) => {
      if (err) console.log(err);
      if (r) return msg.reply(`You are blacklisted from the bot for reason: \`${r.reasonOfBlacklist}\` | You can contact the developer or staff in: ${ids.support_server} to make a appeal!`)
    });
    // guild blacklist coming soon.

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if (!cmd) return;

  if (cmd.conf.ownerOnly && msg.author.id !== msg.guild.owner.user.id) {
    return msg.channel.send({
      embed: {
        color: 0xff3e28,
        timestamp: new Date(),
        title: "Insufficient Permissions",
        description: `\`CMD: ${cmd.help.nam}\`\nThis command can only be used by the server owner.`,
        footer: {
          text: msg.author.tag,
          icon_url: msg.author.displayAvatarURL
        }
      }
    });
  };
  if (cmd.conf.developerOnly && msg.author.id !== keys.developerID) {
    return msg.channel.send({
      embed: {
        color: 0xff3e28,
        timestamp: new Date(),
        title: "Insufficient Permissions",
        description: `\`CMD: ${cmd.help.nam}\`\nThis command can only be used by the developer.`,
        footer: {
          text: msg.author.tag,
          icon_url: msg.author.displayAvatarURL
        }
      }
    });
  };
  if (cmd.conf.guildOnly && !msg.guild) {
    return msg.channel.send({
      embed: {
        color: 0xff3e28,
        timestamp: new Date(),
        title: "Command Run Error",
        description: `\`CMD: ${cmd.help.nam}\`\nThis command can only be used in a server.`,
        footer: {
          text: msg.author.tag,
          icon_url: msg.author.displayAvatarURL
        }
      }
    });
  };
  if (cmd.conf.nsfw && !msg.channel.nsfw) {
    return msg.channel.send({
      embed: {
        color: 0xff3e28,
        timestamp: new Date(),
        title: "Wrong Channel",
        description: `\`CMD: ${cmd.help.nam}\`\nThis command can only be used in a nsfw channel.`,
        footer: {
          text: msg.author.tag,
          icon_url: msg.author.displayAvatarURL
        }
      }
    });
  };

  cmd.execute(client, msg, args, ids, keys, Sqlite);

  });

};
