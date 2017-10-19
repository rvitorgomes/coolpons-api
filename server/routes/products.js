const Router = require('express-promise-router');

const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

async function getAllProducts({
  req,
  res
}) {

  try {
    const { rows } = await db.query('SELECT * FROM produtos');
    res.json(rows);
  } catch(err) {
    console.log(err.stack)
  }
};

async function queryProduct({
  req,
  res
}) {

  try {
    const { company = '*' } = parseInt(req.params);
    const { rows } = await db.query('SELECT * FROM produtos WHERE company = $1', company);
    res.json(rows);
  } catch(err) {
    console.log(err.stack)
  }
};

router.get('/query', queryProduct);
router.get('/', getAllProducts);
