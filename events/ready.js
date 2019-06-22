const chalk = require("chalk"),
ids = require("../ids"),
keys = require("../keys"),
mongoose = require("mongoose");
const Settings = require("../models/settings");
mongoose.connect("mongodb://localhost:27017/lesi_new_db", {
  useNewUrlParser: true
}).then(() => console.log(chalk.grey("[MONGOOSE: CONNECTED]:")));
module.exports.run = client => {
  client.user.setPresence({
    game: {
      type: 0,
      name: `>help | On ${client.guilds.size} Servers`
    }
  });

  client.guilds.keyArray().forEach(id => {
    Settings.findOne({
      guildID: id
    }, (err, settings) => {
      if (!settings) {
        async () => {
        const newSettings = new Settings({
          _id: mongoose.Schema.Types.ObjectId,
          guildID: id,
          prefix: keys.defaultPrefix
        })
        await newSettings.save().catch(err => console.log(err));
       }
      }
    });
  });

  console.log(chalk.green("[READY]:"));

  const channel = client.channels.get(ids.restarts);
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
