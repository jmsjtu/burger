const mysql = require('mysql');
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
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
}


module.exports = connection;