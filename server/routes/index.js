const express = require('express');
const router = express.Router();

// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Api ready!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

const db = require('./queries');

router.get('/api/products', db.getAllStarships);
// router.get('/api/starships/:id', db.getStarship);
// router.post('/api/starships', db.createStarship);
// router.put('/api/starships/:id', db.updateStarship);
// router.delete('/api/starships/:id', db.removeStarship);

module.exports = router;