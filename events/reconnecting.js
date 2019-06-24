const { red } = require("chalk");
module.exports = {
  execute(client, guild) {
  console.log(chalk.red(`[RECONNECTING: AT]: ${new Date()}`));
  }
};
