const chalk = require("chalk");
module.exports.run = (client, guild) => {
  console.log(chalk.red(`[DISCONNECT: AT]: ${new Date()}`));
};
