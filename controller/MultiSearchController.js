const service = require('../service/MultiSearchService');
const Content = require('../model/Content');

const MultiSearchController = {

    search: async function(query) {
        const data = await service.search(query);
        const rawContent = data.results[0];
        return Content.createFromMultiSearch(rawContent);
    }

}

module.exports = MultiSearchController;