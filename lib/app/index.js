const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

// Instantialize express.
const app = express();

// Add HTTP body parsers.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add cookie and session support.
app.use(cookieParser());

// Add Webpack
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, webpackConfig.devServer));

module.exports = app;
