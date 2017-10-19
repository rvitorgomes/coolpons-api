// var promise = require('bluebird');
// var options = {
//   // Initialization Options
//   promiseLib: promise
// };
// var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://localhost:5432/startrek'; // startrek is an example database name

const { Pool, Client } = require('pg');

const connectionString = 'postgres://xawaeirdkqxqcz:f31a24ff510a85fb6e151aaaf811f05d3ade7d84a92a77e06e5148f62c0a856b@ec2-23-23-248-247.compute-1.amazonaws.com:5432/dgtlb9gh3uvkg';

const db = new Pool({
  connectionString: connectionString,
  ssl: true
});

function getAllStarships(req, res, next) {
  db.query('SELECT * FROM starships')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all starships'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/////////////
// Exports
/////////////
module.exports = {
  getAllStarships: getAllStarships,
}


