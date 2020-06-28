const multiSearchController = require('./controller/MultiSearchController');

var args = process.argv.slice(2);

multiSearchController.search(args[0], (content) => {
    console.log(content)
});