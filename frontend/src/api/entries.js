import axios from 'axios';

export const getEntries = (tags, time) => (
    axios({
        url: '/entries',
        method: 'get',
        params: {
            tags: tags.join(';'),
            time,
        },
    })
        .then(({ data }) => data)
)