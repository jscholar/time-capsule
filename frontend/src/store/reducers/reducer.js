import { combineReducers } from 'redux';
import tags from './tags.reducer';
import currentTags from './currentTags.reducer';
import entries from './entries.reducer';

const reducer = combineReducers({
    tags,
    currentTags,
    entries,
});

export default reducer;
