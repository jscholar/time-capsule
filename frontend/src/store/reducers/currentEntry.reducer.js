const currentEntry = (state = null, action) => {
    const { type } = action;
    switch(type) {
        case 'SELECT_ENTRY':
            return action.entry;
        default:
            return state;
    }
}

export default currentEntry;
