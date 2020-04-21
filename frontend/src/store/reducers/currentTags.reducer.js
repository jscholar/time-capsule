const currentTags = (state = [], action) => {
    const { type } = action;
    switch(type) {
        case 'SELECT_TAG':
            if (state.includes(action.tagId)) {
                return state;
            }
            const newCurrentTags = state.slice();
            newCurrentTags.push(action.tagId);
            return newCurrentTags;
        default:
            return state;
    }
}

export default currentTags;
