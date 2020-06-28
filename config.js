const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    tmdbApiKey: process.env.TMDB_API_KEY
};