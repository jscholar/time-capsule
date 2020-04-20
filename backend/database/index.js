const mongoose = require('mongoose');
const Tag = require('./models/tag');

mongoose.connect(
    'mongodb://localhost/time-capsule',
    { 
        useNewUrlParser: true,
        useFindAndModify: true,
     },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to mongod @ time-capsule');
        }
    });

module.exports = mongoose.connection;
