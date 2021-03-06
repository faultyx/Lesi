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
  let reason = args[1];
  if (!reason) reason = "No reason provided.";

  let moderator = msg.guild.member(msg.author);

  Sqlite.get(`SELECT * FROM userblacklist WHERE snowflake = ?`, user.id, (err, r) => {
    if (err) console.log(err);
    if (r) return msg.reply("That user is already blacklisted.");

  Sqlite.run(`INSERT INTO userblacklist (snowflake, reasonOfBlacklist) VALUES (?, ?)`, user.id, reason, (err) => {
    if (err) console.log(err);
    client.channels.get(ids.blacklists).send({
      embed: {
            color: 0xf4bc42,
            timestamp: new Date(),
            author: {
              name: "User Blacklist",
              icon_url: user.displayAvatarURL
            },
            description: `\`[${user.tag} | ${user.id}]\` was blacklisted by
            **${msg.author.tag}** | ${moderator.highestRole.toString()}
            for reason: \`${reason}\``
          }
        }) && msg.reply(`\`[${user.tag} | ${user.id}]\` was blacklisted from the bot.`);
        try {
          user.send(`You were blacklisted from using me, for reason: \`${reason}\``);
        } catch (error) {
          return msg.channel.send("Could not notify user of blacklist.");
        }
  });
  })

  }
};
module.exports.help = {
  nam: "userblacklist",
  mod: "staff",
  desc: "Blacklist a user from the bot.",
  usa: "[prefix]userblacklist [userID] [reason]",
  exa: [">userblacklist 12345678910 Abuse"]
};
module.exports.conf = {
  aliases: ["ubl", "blu"],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: true
};
