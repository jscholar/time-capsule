const currentTags = (state = [], action) => {
    const { type } = action;
    switch(type) {
        case 'TOGGLE_TAG':
            const newCurrentTags = state.slice();
            const index = newCurrentTags.indexOf(action.tagId);
            if (index !== -1) {
                newCurrentTags.splice(index, 1);
            } else {
                newCurrentTags.push(action.tagId);
            }
            return newCurrentTags;
        default:
            return state;
    }
}

export default currentTags;
