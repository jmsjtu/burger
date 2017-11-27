const orm = require('../config/orm.js');

const burger = {
	all(cb) {
		orm.selectAll(res => cb(res));
	},
	insert(burger, cb) {
		orm.insertOne(burger, res => cb(res));
	},
	update(burger, cb) {
		orm.updateOne(burger, res => cb(res));
	}
};

module.exports = burger;