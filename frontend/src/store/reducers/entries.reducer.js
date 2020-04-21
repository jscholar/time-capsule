const entries = (state = [], action) => {
    const { type } = action;
    switch(type) {
        case 'FETCH_ENTRIES':
            return action.entries;
        default:
            return state;
    }
}

export default entries;
