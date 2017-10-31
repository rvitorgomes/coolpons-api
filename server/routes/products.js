const Router = require('express-promise-router');

const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

// GET ALL products
router.get('/', async (req, res) => {
	const { rows } = await db.query('SELECT * FROM products ORDER BY name ASC');
	return res.send(rows);
});

// GET product
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
	return res.send(rows[0]);
});

// POST product
router.post('/', async (req, res) => {
	const data = req.body;
	const { rows } = await db.query('INSERT INTO products VALUES($1, $2, $3, $4,  $5, $6, $7, $8, $9) RETURNING *',
		[data.id, data.name, data.picture, data.price, data.expiration_date, data.type, data.company, data.price_discount, data.status]);
	return res.send(rows);
});

