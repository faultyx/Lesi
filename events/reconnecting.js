const { red } = require("chalk");
module.exports = {
  execute(client, guild) {
  console.log(red(`[RECONNECTING: AT]: ${new Date()}`));
  }
};
