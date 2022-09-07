const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});

module.exports = conn
