const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "burgers_db"
});                 

connection.connect(err => {
  if (err) throw err;
    console.log('connected');
});

module.exports = connection;