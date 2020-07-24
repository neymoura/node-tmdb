const { tmdbApiKey } = require('../config');
const Https = require('https');

const MultiSearchService = {

    search: async function(query) {

        return new Promise((resolve, reject) => {

            var options = {
                host: 'api.themoviedb.org',
                path: '/3/search/multi?api_key='+tmdbApiKey+'&language=pt-BR&query='+encodeURI(query)+'&page=1&include_adult=false',
                method: 'get',
            };

            const requestCallback = (response) => {
                var data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('error', (error) => {
                    console.log(error);
                    reject(error)
                });

                response.on('end', () => {
                    resolve(JSON.parse(data))
                });

            }

            Https.request(options, requestCallback).end();

        });

    }

}

module.exports = MultiSearchService