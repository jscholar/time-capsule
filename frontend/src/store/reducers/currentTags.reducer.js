const currentTags = (state = [], action) => {
    const { type } = action;
    switch(type) {
        case 'SELECT_TAG':
            const newCurrentTags = state.slice();
            newCurrentTags.push(action.tagId);
            return newCurrentTags;
        default:
            return state;
    }
}

export default currentTags;
