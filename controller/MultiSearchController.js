const service = require('../service/MultiSearchService');
const Content = require('../model/Content');

const MultiSearchController = {

    search: function(query, callback) {

        service.search(query, (data) => {
            const rawContent = data.results[0];
            const content = Content.createFromMultiSearch(rawContent);
            callback(content);
        });
        
    }

}

module.exports = MultiSearchController;