const connection = require('./connection.js');

const orm = {
	selectAll(cb) {
		const query = 'SELECT * FROM burgers';
		connection.query(query, (err, res) => {
			if(err) throw err;
			cb(res);
		});
	},
	insertOne(burger, cb) {
		const query = 'INSERT INTO burgers SET ?';
		
		connection.query(query, burger, (err, res) => {
			if(err) throw err;
			cb(res);
		});
	},
	updateOne(burger, cb) {
		const query = 'UPDATE burgers SET devoured = ? WHERE id = ?';
		const updateArray = [burger.devoured, burger.id];
		connection.query(query, updateArray, (err, res) => {
			if(err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;