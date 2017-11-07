const Router = require('express-promise-router');

const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

// GET ALL users
router.get('/', async (req, res) => {
	const { rows } = await db.query('SELECT * FROM users ORDER BY name ASC');
	return res.send(rows);
});

// GET user
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const { rows } = await db.query('SELECT * FROM users WHERE user_id = $1', [id]);
	return res.send(rows[0]);
});

// POST user
router.post('/', async (req, res) => {
	const data = req.body;
	const { rows } = await db.query('INSERT INTO users VALUES($1, $2, $3, $4, $5) RETURNING *',
		[data.user_id, data.name, data.email, data.birthdate, data.picture]);
	return res.send(rows);
});


// SEARCH user
router.post('/search', async (req, res) => {
	const { text } = req.body;
	const { rows } = await db.query('SELECT * FROM users WHERE name LIKE $1', [text]);
	return res.send(rows);
});