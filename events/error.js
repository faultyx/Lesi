const { red } = require("chalk");
module.exports = {
  execute(error) {
  console.log(red("[ERROR]:\n") + error);
  }
};
