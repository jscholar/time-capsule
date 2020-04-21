import { combineReducers } from 'redux';
import tags from './tags.reducer';
import currentTags from './currentTags.reducer';
import entries from './entries.reducer';
import currentEntry from './currentEntry.reducer';

const reducer = combineReducers({
    tags,
    currentTags,
    entries,
    currentEntry,
});

export default reducer;
