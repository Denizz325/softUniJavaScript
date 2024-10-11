const http = require('http');

const siteCss = require('../content/styles/site.css.js');
const indexTemplate = require('../viewsHTML/index.html.js');
const addBreedHtml = require('../viewsHTML/addBreed.html.js');
const addCatHtml = require('../viewsHTML/addCat.html.js');
const { cats } = require('../database/data.js');

console.log(cats)

const port = 5000;



const server = http.createServer((req, res) => {
    if (req.url === '/styles/site.css') {
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }

    res.writeHead(200, {
        'content-type': 'text/html',
    });

    switch (req.url) {
        case '/':
            res.write(indexTemplate(cats));
            break;
        case '/cats/add-breed':
            res.write(addBreedHtml);
            break;
        case '/cats/add-cat':
            res.write(addCatHtml);
            break;
        default:
            res.write(`<h1>Page Not Found!</h1>`);
            break;
    }

    res.end();
});

server.listen(port);
console.log(`Server is listening on http://localhost:${port}`);
