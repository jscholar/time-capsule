const express = require('express');
const tags = express.Router();

tags.get('/', (req, res) => {
    res.send('Get tags');
});

tags.post('/', (req, res) => {
    res.send('Create tag');
});

tags.put('/:tagId', (req, res) => {
    res.send('Update tag');
});

module.exports = tags;
