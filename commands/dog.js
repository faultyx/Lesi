const sa = require("superagent");
module.exports = {
  execute(client, msg, args) {
  sa.get("https://random.dog/woof.json")
  .end((err, res) => {
  if (!err && res.status === 200) {
    return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
      embed: {
        color: 0xffffff,
        timestamp: new Date(),
        image: {
          url: res.body.url
        }
      }
    });
  } else {
    return msg.channel.send("There was an error trying to get a bird image.");
  }

  });

  }
};
module.exports.help = {
  nam: "dog",
  mod: "fun",
  desc: "Get a dog image!",
  usa: "[prefix]dog",
  exa: [">dog"]
};
module.exports.conf = {
  aliases: ["doggy"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
