const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/');
const tags = require('./routes/tags');

const app = express();

app.use(express.static(
    path.resolve(__dirname, '..', 'public')
));

app.use(bodyParser.json());

app.use('/tags', tags);

module.exports = app;
