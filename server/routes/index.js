// ./routes/index.js
const products = require('./products');
const users = require('./users');
const sales = require('./sales');

module.exports = (app) => {
  app.use('/api/products', products),
  app.use('/api/users', users),
  app.use('/api/sales', sales)
}