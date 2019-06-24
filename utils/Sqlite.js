const sql = require("sqlite3"),
chalk = require("chalk");
const db = new sql.Database("lesi_db.sqlite");
console.log(chalk.grey("[SQLITE]:") + " Initialised.");

const tables = {
  guild: [
    "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
    "guild TEXT NOT NULL"
  ],
  userblacklist: [
    "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
    "snowflake TEXT NOT NULL",
    "reasonOfBlacklist TEXT NOT NULL"
  ],
  guildblacklist: [
    "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
    "guild TEXT NOT NULL",
    "reasonOfBlacklist TEXT NOT NULL"
  ]
}
  for (let table in tables) {
  	db.run(`CREATE TABLE ${table} (${tables[table].join(", ")})`, () => {
  		console.log(chalk.blue("[SQLITE: TABLE: CREATE]:") + ` ${table}`);
  	})
  }
module.exports = db;
