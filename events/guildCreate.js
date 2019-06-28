const ids = require("../ids");
module.exports = {
  execute(client, guild) {
  // let channel = client.channels.get(ids.guild_join);
  let channel = client.channels.get(ids.temp);
  if (!channel) return;
  channel.send({
    embed: {
      color: 0x4286f4,
      timestamp: new Date(),
      footer: {
        text: "Joined a new Guild."
      },
      description: `**Owner:** \`[${guild.owner.user.tag} | ${guild.owner.id}]\`\n**Server:** \`${guild.name.substring(0, 100)}\`\n**Members:** \`${guild.memberCount}\``
    }
  })
  }
};
