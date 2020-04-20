import { combineReducers } from 'redux';
import tags from './tags.reducer';
import currentTags from './currentTags.reducer';

const reducer = combineReducers({
    tags,
    currentTags,
});

export default reducer;
