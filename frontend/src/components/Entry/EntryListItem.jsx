import React from 'react';

import { connect } from 'react-redux';
import selectEntry from '../../store/actions/selectEntry.action';

const EntryListItem = ({ entry, selectEntry }) => (
    <div onClick={() => selectEntry(entry)}>
        {entry.senderTime}
    </div>
)

const mapDispatchToProps = {
    selectEntry,
}

export default connect(null, mapDispatchToProps)(EntryListItem);