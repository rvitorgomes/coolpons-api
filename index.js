const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors= require('cors');

const mountRoutes = require('./server/routes');
mountRoutes(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const originsWhitelist = [
	'http://localhost:4200',      //this is my front-end url for development
	'https://coolpons-api.herokuapp.com/'
];

const corsOptions = {
	origin: function(origin, callback){
		const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
		callback(null, isWhitelisted);
	},
	credentials:true
}
  //here is the magic
app.use(cors(corsOptions));

app.listen(process.env.PORT || 8080);

console.log('Server Listening!');

module.exports = app;
