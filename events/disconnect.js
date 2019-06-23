const chalk = require("chalk");
module.exports = {
  execute(client, guild) {
  console.log(chalk.red(`[DISCONNECT: AT]: ${new Date()}`));
  }
};
