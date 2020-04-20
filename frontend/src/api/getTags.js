const axios = require('axios');

const getTags = () => (
    axios({
        url: '/tags',
        method: 'get',
    })
        .then(({ data }) => data)
)

module.exports = getTags;
