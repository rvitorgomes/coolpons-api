const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mountRoutes = require('./server/routes');
mountRoutes(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Add this middleware in your express app
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header('access-Control-Allow-Origin', '*');
	next();
	});

app.listen(process.env.PORT || 8080);

console.log('Server Listening!');

module.exports = app;
