const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'lifelink.db'));

db.serialize(() => {
  db.run('ALTER TABLE donors ADD COLUMN full_name TEXT', (err) => {
    if (err) console.error('ALTER ERROR:', err.message);
    else console.log('Column added');
    
    db.run('UPDATE donors SET full_name = (SELECT full_name FROM users WHERE users.id = donors.user_id)', (err) => {
      if (err) console.error('UPDATE ERROR:', err.message);
      else console.log('Data migrated');
    });
  });
});
