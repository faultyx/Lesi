const ids = require("../ids"),
keys = require("../keys"),
chalk = require("chalk");
const Settings = require("../models/settings");
module.exports = {
  execute(client, guild) {
      Settings.findOne({
      guildID: guild.id
    }, (err, settings) => {
      if (!settings) {
        const newSettings = new Settings({
          guildID: guild.id,
          prefix: keys.defaultPrefix,
          modules: {
            fun: true,
            guild: true
          }
        })
        newSettings.save().catch(err => console.log(err));
        console.log(chalk.grey("[MONGOOSE: INSERT]: " + `Set settings for guild: "${guild.id}"`));
       }
     });
  let channel = client.channels.get(ids.guild_join);
  if (!channel) return;
  channel.send({
    embed: {
      color: 0x4286f4,
      timestamp: new Date(),
      footer: {
        text: "Joined a new Guild."
      },
      description: `**Owner:** \`[${guild.owner.user.tag} | ${guild.owner.id}]\`\n**Server:** \`${guild.name}\`\n**Members:** \`${guild.memberCount}\``
    }
  })
  }
};
