// ./routes/index.js
const products = require('./products');

module.exports = (app) => {
  app.use('/api/products', products),
  app.use('/api/users', users)
}