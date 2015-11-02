'use strict';

var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');

var app    = express();

app.use(express.static(path.join(__dirname, '..')));
app.use('/bower_components',  express.static(path.join(__dirname, '..', '..' , 'bower_components')));
app.use('/styles',  express.static(path.join(__dirname, '..' , '..', 'styles')));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(8080);

console.log('Listening on port http://localhost:8080...');
