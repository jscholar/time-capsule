import React from 'react';
import { connect } from 'react-redux';

import EntryListItem from './EntryListItem'

const Inbox = ({ entries }) => (
    <div>
        {entries.map((entry) => (
            <EntryListItem
                key={entry._id}
                entry={entry}
            />
        ))}
    </div>
);

const mapStateToProps = ({ entries }) => ({
    entries,
});

export default connect(mapStateToProps)(Inbox);
