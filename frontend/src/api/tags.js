const axios = require('axios');

export const getTags = () => (
    axios({
        url: '/tags',
        method: 'get',
    })
        .then(({ data }) => data)
)

export const postTag = (tag) => (
    axios({
        url: '/tags',
        method: 'post',
        data: tag
    })
);
