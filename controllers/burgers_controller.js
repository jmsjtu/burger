const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
	burger.all(data => {
		const burgerObj = { burgers: data };

		res.render('index', burgerObj);
	})
});

router.post('/api/burgers', (req, res) => {
	console.log(req.body.name)
	const burgerObj = { burger_name: req.body.name }
	
	burger.insert(burgerObj, result => res.json({ id: result.insertId }))
});

router.put('/api/burgers/:id', (req, res) => {
	const id = req.params.id;
	const burgerObj = { devoured: true, id: id };

	burger.update(burgerObj, result => {
		if(result.changedRows === 0)
			res.status(400).end();
		else if(result.changedRows > 0)
			res.status(200).end();
	});
});

module.exports = router;
