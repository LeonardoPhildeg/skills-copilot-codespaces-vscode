// Create web server
// Create a web server that listens on port 8080 and serves the comments.html file. Use the fs module to read the file and the http module to create the server.

// Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080...');
});

