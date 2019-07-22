const cooldown = require("../utils/Cooldown");
module.exports = {
  execute(client, msg, args) {
    if (cooldown(msg, "kiss_marry_kill", 4000, "4 seconds")) {
      let user1 = args[0];
      let user2 = args[1];
      let user3 = args[2];

      if (!user1) user1 = "No";
      if (!user2) user2 = "users";
      if (!user3) user3 = "given.";

      function shuffleList(array) {
      const arr = array.slice(0);
      for (let i = arr.length - 1; i >= 0; i--) {
      const m = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[m] = temp;
      }
      return arr;
      };

      const results = shuffleList([user1, user2, user3]);

      return msg.channel.send(`I'd kiss **${results[0]}**\nMarry **${results[1]}**\nKill **${results[2]}**`);
    }
  }
};
module.exports.help = {
  nam: "kissmarrykill",
  mod: "fun",
  desc: "Kiss that, marry this, kill them.",
  usa: "[prefix]kissmarrykill",
  exa: [">kissmarrykill @Lesi @LesiNeo @Faulty X"]
};
module.exports.conf = {
  aliases: ["kmk"],
  guildOnly: true,
  ownerOnly: false,
  developerOnly: false,
  hiddenFromHelp: false
};
