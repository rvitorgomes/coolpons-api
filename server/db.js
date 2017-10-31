const { Pool, Client } = require('pg');

// const connectionStringOld = 'postgres://xawaeirdkqxqcz:f31a24ff510a85fb6e151aaaf811f05d3ade7d84a92a77e06e5148f62c0a856b@ec2-23-23-248-247.compute-1.amazonaws.com:5432/dgtlb9gh3uvkg';

const connectionString = 'postgres://dypezzejmngwim:b888b97ae4782aa3dc9f9d1318f30896823a5c7e9689718dbc963bfeabe13526@ec2-54-235-72-121.compute-1.amazonaws.com:5432/d9kob3f4nl9h56';

const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

module.exports = {
  query: (text, params) => pool.query(text, params)
  .then(res => res)
  .catch(e => console.log(e),'API Error')
}