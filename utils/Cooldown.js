const cld = new Set();
const keys = require("../keys");
function cooldown(msg, command, time, timeFormat) {
  if ([keys.developerID].includes(msg.author.id)) {
      return true;
  }
  let toAdd = msg.author.id + msg.guild.id + command;
  if (cld.has(toAdd)) {
      msg.reply(`Slow down, take it easy. Wait ${timeFormat} before using \`${command}\` again.`).then(msg => {msg.delete(3000)}).catch(console.error);
      return false;
  }
  cld.add(toAdd);
  setTimeout(() => {
      cld.delete(toAdd);
  }, time);
  return true;
}
module.exports = cooldown;
