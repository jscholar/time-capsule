import DUMMY_ENTRIES from './DUMMY_ENTRIES.json'

const entries = (state = DUMMY_ENTRIES, action) => {
    const { type } = action;
    switch(type) {
        case 'FETCH_ENTRIES':
            return action.entries;
        default:
            return state;
    }
}

export default entries;
