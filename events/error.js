const chalk = require("chalk");
module.exports = {
  execute(error) {
  console.log(chalk.red("[ERROR]:\n") + `${JSON.stringify(error)}`);
  }
};
