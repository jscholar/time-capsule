import DUMMY_TAGS from './DummyTags.json';

const tags = (state = DUMMY_TAGS, action) => {
    const { TYPE } = action;
    switch(TYPE) {
        default:
            return state;
    }
};

export default tags;
