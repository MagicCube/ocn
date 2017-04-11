const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

// Setup Mongoose.
require('../db/mongoose/setup');
const url = 'mongodb://localhost/ocn';
mongoose.connect(url);

// Instantialize express.
const app = express();

// Add HTTP body parsers.
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add cookie and session support.
app.use(cookieParser());
const MongoStore = connectMongo(session);
app.use(session({
  secret: 'i$love%ocn!',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));



// Add Webpack
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, webpackConfig.devServer));

app.use('/data', express.static('data'));
app.use('/api', require('../api'));

module.exports = app;
