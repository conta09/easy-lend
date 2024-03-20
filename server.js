// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'loan.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        let contentType = 'text/html';

        // Set content type based on file extension
        if (filePath.endsWith('.css')) {
            contentType = 'text/css';
        } else if (filePath.endsWith('.png')) {
            contentType = 'image/png';
        } else if (filePath.endsWith('.svg')) {
            contentType = 'image/svg+xml';
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});









const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


