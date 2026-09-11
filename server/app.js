const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url === '/' && req.method === 'GET') {
        res.end(`
            <h1>Welcome to Node.js Server</h1>
            <p>This is the Home Page.</p>
        `);
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.end(`
            <h1>About Page</h1>
            <p>This is the About Page.</p>
        `);
    } 
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});