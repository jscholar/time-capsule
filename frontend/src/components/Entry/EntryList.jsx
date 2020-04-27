import React from 'react';

import { connect } from 'react-redux';
import fetchEntries from '../../store/actions/fetchEntries.action';

import EntryListItem from './EntryListItem';

const EntryList = ({ entries, currentTags, dispatchFetchEntries }) => (
    <div>
        <div onClick={() => dispatchFetchEntries()}>Refresh</div>
        {entries.map((entry) => (
            <EntryListItem
                key={entry._id}
                entry={entry}
            />
        ))}
    </div>
);

const mapStateToProps = ({ entries, currentTags }) => ({
    entries,
    currentTags,
});

const mapDispatchToProps = { 
    dispatchFetchEntries: fetchEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
