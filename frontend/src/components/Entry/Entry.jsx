import React from 'react';

import { connect } from 'react-redux';

import { Tag } from '../Tag/Tag';

import './Entry.css';

const Entry = ({ entry, tags }) => (
    entry ? 
        <div className="entry">
            <div className="recipient">
                To
                {entry.recipientTags.map(tagId => (
                    <Tag 
                        key={tagId}
                        name={tags[tagId].name}
                        color={tags[tagId].color}
                    />
                ))}
            </div>
            <div className="message">
                {entry.message}
            </div>
            <div className="sender">       
                From
                {entry.senderTags.map(tagId => (
                    <Tag 
                        key={tagId}
                        name={tags[tagId].name}
                        color={tags[tagId].color}
                    />
                ))}
            </div>
        </div>
    : null
);

const mapStateToProps = ({ currentEntry, tags }) => ({
    entry: currentEntry,
    tags,
});

export default connect(mapStateToProps)(Entry);
