const sql = require("sqlite3"),
chalk = require("chalk"),
db = new sql.Database("lesi_db.sqlite");
console.log(chalk.grey("[SQLITE]:") + " Initialised.");

const tables = {
  guild: [
    "id INTEGER NOT NULL",
    "prefix TEXT NOT NULL",
    "blacklisted TEXT NOT NULL"
  ]
}
  for(let table in tables) {
  	db.run(`CREATE TABLE ${table} (${tables[table].join(", ")})`, () => {
  		console.log(chalk.blue("[SQLITE: TABLE: CREATE]:") + ` ${table}`);
  	})
  }
