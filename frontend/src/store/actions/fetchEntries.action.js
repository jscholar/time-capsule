import { getEntries } from '../../api/entries';

const fetchEntries = (tags, time) => {
    return (dispatch, getState) => {
        const { currentTags } = getState();
        return getEntries(currentTags, time)
            .then((entries) => {
                dispatch({
                    type: 'FETCH_ENTRIES',
                    entries,
                });
            });
    }
}

export default fetchEntries;
