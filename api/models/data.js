const db = require('./database.js');

class TodoData{
  getAll(callback){
    const sql = 'select * from airInfo';

    db.query(sql, (err, results) => {
      if (err) {
        callback(true);
        return;
      }

      callback(false, results);
    });
  }
}

module.exports = TodoData
