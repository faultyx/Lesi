process.title = "Lesi | The simple Discord Bot";

const Discord = require("discord.js"),
fs = require("fs"),
chalk = require("chalk");

const keys = require("./keys");
const ids = require("./ids");

const client = new Discord.Client({
  disableEveryone: true,
  invite: ids.support_server,
  github: ids.github_url,
  ownerID: keys.developerID
});

fs.readdir("./events/", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
    });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if (err)
    console.error(err);
  let jsfiles = files.filter(f => f.split('.')
    .pop() === 'js');
  if (jsfiles.length <= 0) {
    return;
  }
  jsfiles.forEach(f => {
    let props = require(`./commands/${ f }`);
    props.fileName = f;
    client.commands.set(props.help.nam, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.nam);
    });
  });
});

client.login(keys.l_token)
.catch(console.error);
