const { tmdbApiKey } = require('../config');
const Https = require('https');

const MultiSearchService = {

    search: function(query, callback) {
        
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
                callback(null)
            });

            response.on('end', () => {
                callback(JSON.parse(data))
            });

        }

        Https.request(options, requestCallback).end();

    }

}

module.exports = MultiSearchService