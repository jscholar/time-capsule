import getTags from '../../api/getTags';

const fetchTags = () => {
    return (dispatch) => {
        return getTags()
            .then((tags) => {
                dispatch({
                    type: 'FETCH_TAGS',
                    tags
                });
            });
    }
}

export default fetchTags;
