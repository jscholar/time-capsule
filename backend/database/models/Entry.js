const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const entrySchema = mongoose.Schema({
    recipientTags: Array,
    recipientTime: Date,
    senderTags: Array,
    senderTime: Date,
    message: String,
});

const Entry = mongoose.model('Entry', entrySchema);

Entry.findByTagsAndTime = (tags, time = new Date()) => (
    Entry.find({
        recipientTags: tags 
            ? { $elemMatch: { $in: tags } } // Matches entries with any tag in search
            : [],
        recipientTime: { $lte: time },
    })
        .sort({ senderTime: 'desc' })
);

module.exports = Entry;
