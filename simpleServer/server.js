const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
    "html":"text/html",
    "jpeg":"image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer((req, res) => {
    let uri = url.parse(req.url).pathname;
    let fileName = path.join(process.cwd(), decodeURI(uri));
    console.log('Loading ' + uri);
    let stats;

    try {
        stats = js.lstatSync(fileName);
    } catch(e) {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
    }

    if (stats.isFile()) {
        console.log("isFile");
        let mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, {'Content-type': mimeType})

        let filesStream = fs.createReadStream(fileName);
        filesStream.pipe(res);
    } else if (fs.stats.isDirectory()) {
        console.log("isDirectory");
        res.writeHead(302, {
            'Location': 'index.html'
        });
        res.end();
    } else {
        console.log("isNeither");
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write('500 Internal Error\n');
        res.end();
    }
}).listen(1337);