const ids = require("../ids");
module.exports = {
  execute(client, guild) {
  let channel = client.channels.get(ids.guild_leave);
  if (!channel) return;
  channel.send({
    embed: {
      color: 0xe84833,
      timestamp: new Date(),
      footer: {
        text: "Left a Guild."
      },
      description: `**Owner:** \`[${guild.owner.user.tag} | ${guild.owner.id}]\`\n**Server:** \`${guild.name}\`\n**Members:** \`${guild.memberCount}\``
    }
  })
  }
};
