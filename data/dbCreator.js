const sqlite = require('sqlite3').verbose();
const users = require('./users.json')
const users_statistic = require('./users_statistic.json')

const dbCreator = () => {
  const db = new sqlite.Database(`data/data.db`);
  const theadCreator = (table) => {
    return Object.keys(table[table.length - 1]);
  }
  const trowCreator = (user) => {
    return Object.values(user);
  }

  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      gender TEXT,
      ip_address TEXT,
      page_views INTEGER,
      clicks INTEGER
    )`,
    (err) => {
      if (err) {
        theadCreator(users).forEach(header => {
          db.run(`SELECT ${header} FROM users`, err => {
            if (err) {
              db.run(`ALTER TABLE users ADD COLUMN "${header}"`, err => {
                if(err) {
                  console.log(err);
                }
              });
            }
          });
        })
      }
      users.forEach((user) => {
        db.run(`INSERT OR IGNORE 
          INTO users ("${theadCreator(users).join('", "')}")
          VALUES ("${trowCreator(user).join('", "')}")`)
      })  
    }
  )

  db.run(`CREATE TABLE users_statistic (
    id INTEGET PRIMARY KEY,
    user_id INTEGER,
    date DATE,
    page_views INTEGER,
    clicks INTEGER
  )`, (err) => {
    if (err) {
      theadCreator(users_statistic).forEach(header => {
        db.run(`SELECT ${header} FROM users_statistic`, err => {
          if (err) {
            db.run(`ALTER TABLE users_statistic ADD COLUMN "${header}"`, err => {
              if(err) {
                console.log(err);
              }
            });
          }
        });
      })
    }
    users_statistic.forEach((user, index) => {
      db.run(`INSERT OR IGNORE 
        INTO users_statistic ("id", "${theadCreator(users_statistic).join('", "')}")
        VALUES ("${index}", "${trowCreator(user).join('", "')}")`)
    })
  })

  db.close();
}

module.exports = dbCreator();