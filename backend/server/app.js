const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/');
const tags = require('./routes/tags');
const entries = require('./routes/entries');

const app = express();

app.use(express.static(
    path.resolve(__dirname, '..', 'public')
));

app.use(bodyParser.json());

app.use('/tags', tags);

app.use('/entries', entries);

module.exports = app;
