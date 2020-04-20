const express = require('express');
const tags = require('./routes/tags');

const app = express();

app.use('/tags', tags);

module.exports = app;
