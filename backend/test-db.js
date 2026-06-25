const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'lifelink.db'));

db.all('SELECT * FROM users', [], (err, users) => {
  console.log('--- USERS ---');
  console.log(users);
});

db.all('SELECT * FROM donors', [], (err, donors) => {
  console.log('--- DONORS ---');
  console.log(donors);
});
