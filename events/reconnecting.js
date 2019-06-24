const { green } = require("chalk");
module.exports = {
  execute(client, guild) {
  console.log(green(`[RECONNECTING: AT]: ${new Date()}`));
  }
};
