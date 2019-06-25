module.exports = {
  execute(client, msg, args, ids, keys, Sqlite) {

  let role_guild = client.guilds.get(ids.support_server_id).roles.find(r => r.name.toLowerCase() === "[connect]").id;
  if (!msg.member.roles.get(role_guild)) return;

  let id = args[0];
  if (!id) return msg.reply("You forgot to give a ID!");
  let guild = client.guilds.get(id);
  let reason = args[1];
  if (!reason) reason = "No reason provided.";

  let moderator = msg.guild.member(msg.author);

  try {

  Sqlite.get(`SELECT * FROM guildblacklist WHERE guild = ?`, guild.id, (err, r) => {
    if (err) console.log(err);
    if (r) return msg.reply("That guild is already blacklisted.");

  Sqlite.run(`INSERT INTO guildblacklist (guild, reasonOfBlacklist) VALUES (?, ?)`, guild.id, reason, (err) => {
    if (err) console.log(err);
    return client.channels.get(ids.blacklists).send({
      embed: {
            color: 0xf4bc42,
            timestamp: new Date(),
            author: {
              name: "Guild Blacklist",
              icon_url: guild.iconURL
            },
            description: `\`[${guild.name} | ${guild.id}]\` was blacklisted by
            **${msg.author.tag}** | ${moderator.highestRole.toString()}
            for reason: \`${reason}\``
          }
        }) && msg.reply(`\`[${guild.name} | ${guild.id}]\` was blacklisted from the bot.`);
  });
  })
} catch (error) {
  if (error) console.log(error);
  return msg.reply(`There was an error:\n\`${error.message}\``);
}

  }
};
module.exports.help = {
  nam: "guildblacklist",
  mod: "core",
  desc: "Blacklist a guild from the bot.",
  usa: "[prefix]guildblacklist [guildID] [reason]",
  exa: [">guildblacklist 12345678910 Abuse"]
};
module.exports.conf = {
  aliases: ["gbl", "blg"],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: true
};
