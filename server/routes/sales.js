const Router = require('express-promise-router');

const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

// POST SALE
router.post('/', async (req, res) => {
    const data = req.body;
	const { rows } = await db.query('INSERT INTO sales VALUES($1, $2, $3, $4, $5) RETURNING *',
		[data.id, data.date, data.userId, data.price, data.idProduto]);
    return res.send(rows);
});

//GET PRODUCTS FROM SPECIFIC USER
router.get('/:id', async (req, res) => {
    let aux = [];
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM sales WHERE user_id = $1', [id]);
    for(let i = 0 ; i < rows.length ; i++){
        let idProduct  = rows[i].product_id;
        let rowsProduct  = await db.query('SELECT * FROM products WHERE id = $1', [idProduct]);
        aux.push(rowsProduct.rows);
    }
	return res.send(aux);
});


