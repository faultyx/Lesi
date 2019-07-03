const request = require("request");
const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
  if (cooldown(msg, "rabbit", 4000, "4 seconds")) {
    let imgs = Math.floor(Math.random() * 80);
    let url = ["https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100"];
    request({
      method: "GET",
      uri: url[Math.floor(Math.random() * url.length)]
    }, function (err, response, data) {
      if(err) {
        console.log(err, null);
        return;
      }

      data = JSON.parse(data);
      var mainObj = data.data.children;
      var urls = {};

      for(let i = 0; i < mainObj.length; i++) {
      let url = mainObj[i].data.url;
      urls[i+1] = url;
      }
      return msg.channel.send(`**Requested by:** ${msg.author.toString()}`, {
        embed: {
          color: 0xffffff,
          timestamp: new Date(),
          image: {
            url: urls[imgs]
          }
        }
      });
  if (client.user && msg.content === "undefined") {
      msg.delete()
  }});
  }
 }
};
module.exports.help = {
  nam: "rabbit",
  mod: "fun",
  desc: "Get a bunny image!",
  usa: "[prefix]rabbit",
  exa: [">rabbit"]
};
module.exports.conf = {
  aliases: ["bunny"],
  guildOnly: false,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
