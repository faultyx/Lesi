const { red } = require("chalk");
module.exports = {
  execute(client, guild) {
  console.log(red("[DISCONNECT: AT]:") + ` ${new Date()}`);
  }
};
