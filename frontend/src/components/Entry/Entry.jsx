import React from 'react';

import { connect } from 'react-redux';

import { Tag } from '../Tag/Tag';

const Entry = ({ entry, tags }) => (
    entry ? 
        <div>
            {entry.recipientTags.map(tagId => (
                <Tag 
                    key={tagId}
                    name={tags[tagId].name}
                    color={tags[tagId].color}
                />
            ))}
            {entry.message}
            {entry.senderTags.map(tagId => (
                <Tag 
                    key={tagId}
                    name={tags[tagId].name}
                    color={tags[tagId].color}
                />
            ))}
        </div>
    : null
);

const mapStateToProps = ({ currentEntry, tags }) => ({
    entry: currentEntry,
    tags,
});

export default connect(mapStateToProps)(Entry);
