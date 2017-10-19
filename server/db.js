const { Pool, Client } = require('pg');

const connectionString = 'postgres://xawaeirdkqxqcz:f31a24ff510a85fb6e151aaaf811f05d3ade7d84a92a77e06e5148f62c0a856b@ec2-23-23-248-247.compute-1.amazonaws.com:5432/dgtlb9gh3uvkg';

const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

module.exports = {
  query: (text, params) => pool.query(text, params)
  .then(res => res)
  .catch(e => console.log(e),'API Error')
}