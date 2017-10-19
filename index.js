const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors= require('./cors');

const mountRoutes = require('./server/routes');
mountRoutes(app);

app.use(logger('dev'));
app.use(cors.permission);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080);

console.log('Server Listening!');

module.exports = app;
