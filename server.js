const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5401;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    const ext = path.extname(filePath);

    let contentType = 'text/html';

    if (ext === '.js') contentType = 'text/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.json') contentType = 'application/json';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.jpg') contentType = 'image/jpg';

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(404);
            res.end('File Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }

    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
