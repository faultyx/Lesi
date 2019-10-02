module.exports = {
  execute(client, msg, args, ids, keys, Sqlite) {

  let role_guild = client.guilds.get(ids.support_server_id).roles.find(r => r.name.toLowerCase() === "[connect]").id;
  if (!msg.member.roles.get(role_guild)) return;

  let id;
  if (msg.mentions.users.first()) {
    id = msg.mentions.users.first().id
  } else if (args[0]) {
    id = args[0];
  };
  if (!id) return msg.reply("You forgot to give a ID or mention a user!");
  let user = client.users.get(id);
  if (!user === null || undefined) user = msg.guild.fetchBans(id).user || return msg.reply("Invalid ID or fetch failed. Try again.");
  let reason = args[1];
  if (!reason) reason = "No reason provided.";

  let moderator = msg.guild.member(msg.author);

  Sqlite.get(`SELECT * FROM userblacklist WHERE snowflake = ?`, user.id, (err, r) => {
    if (err) console.log(err);
    if (!r) return msg.reply("That user is not blacklisted.");

  Sqlite.run(`DELETE FROM userblacklist WHERE snowflake = ?`, user.id, (err) => {
    if (err) console.log(err);
    client.channels.get(ids.whitelists).send({
      embed: {
            color: 0xf4bc42,
            timestamp: new Date(),
            author: {
              name: "User Whitelist",
              icon_url: user.displayAvatarURL
            },
            description: `\`[${user.tag} | ${user.id}]\` was whitelisted by
            **${msg.author.tag}** | ${moderator.highestRole.toString()}
            for reason: \`${reason}\``
          }
        }) && msg.reply(`\`[${user.tag} | ${user.id}]\` was whitelisted from the bot.`);
        try {
          user.send(`You were whitelisted from using me :boom:! For reason: \`${reason}\``);
        } catch (error) {
          return msg.channel.send("Could not notify user of whitelist.");
        }
  });
  })

  }
};
module.exports.help = {
  nam: "userwhitelist",
  mod: "staff",
  desc: "Whitelist a user from the bot.",
  usa: "[prefix]userwhitelist [userID] [reason]",
  exa: [">userwhitelist 12345678910 Time Over!"]
};
module.exports.conf = {
  aliases: ["uwl", "wlu"],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: true
};
