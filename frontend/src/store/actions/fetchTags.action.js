import { getTags } from '../../api/tags';

const fetchTags = () => {
    return (dispatch) => {
        return getTags()
            .then((tags) => {
                const tagsState = {};
                tags.forEach(({_id, name, color}) => {
                    tagsState[_id] = {
                        name,
                        color,
                    }
                });
                dispatch({
                    type: 'FETCH_TAGS',
                    tagsState
                });
            });
    }
}

export default fetchTags;
