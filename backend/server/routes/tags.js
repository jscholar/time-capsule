const express = require('express');
const db = require('../../database/index');
const Tag = require('../../database/models/tag');
const tags = express.Router();

tags.get('/', (req, res) => {
    Tag.find()
        .then((docs) => {
            res.send(docs);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        })
});

tags.post('/', (req, res) => {
    res.send('Create tag');
});

tags.put('/:tagId', (req, res) => {
    res.send('Update tag');
});

module.exports = tags;
