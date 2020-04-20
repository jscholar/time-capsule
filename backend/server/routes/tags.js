const express = require('express');
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

tags.post('/', async ({ body: tag }, res) => {
    let tagExists;
    await Tag.findOne({ name: tag.name })
        .then((doc) => tagExists = doc !== null)
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error checking database')
        });
        ;

    if (tagExists) {
        res.status(400).send('Already exists');
    } else {
        const newTag = new Tag(tag);
        newTag.save()
            .then((doc) => {
                res.status(201).send();
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send('Error saving document');
            })
    }

});

tags.put('/:tagId', ({ body: tag, params }, res) => {
    const { tagId } = params;
    Tag.findByIdAndUpdate(tagId, tag)
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error updated document');
        });
});

module.exports = tags;
