import DUMMY_TAGS from './DUMMY_TAGS.json';

const tags = (state = DUMMY_TAGS, action) => {
    const { type } = action;
    switch(type) {
        default:
            return state;
    }
};

export default tags;
