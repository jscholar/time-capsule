import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import selectEntry from '../../store/actions/selectEntry.action';

const EntryListItem = ({ entry, selectEntry }) => (
    <div onClick={() => selectEntry(entry)}>
        {moment(entry.senderTime).format('LLL')}
    </div>
)

const mapDispatchToProps = {
    selectEntry,
}

export default connect(null, mapDispatchToProps)(EntryListItem);