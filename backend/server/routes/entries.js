const express = require('express');
const entries = express.Router();

const Entry = require('../../database/models/Entry');

entries.get('/', ({ query }, res) => {
    const { time, tags } = query;
    Entry.findByTagsAndTime(tags && tags.split(';'), time)
        .then((entries) => {
            res.send(entries);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error querying entries');
        });
});

entries.post('/', ({ body: entry }, res) => {
    entry.senderTime = new Date();
    const newEntry = new Entry(entry);
    newEntry.save()
        .then((doc) => {
            res.status(201).send();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error creating entry');
        })
});

module.exports = entries;