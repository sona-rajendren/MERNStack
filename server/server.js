const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Home Page
    if (req.url === '/' && req.method === 'GET') {
        res.end(`
            <h1>Welcome to Node.js Server</h1>
            <p>This is the Home Page</p>
        `);
    }

    // About Page
    else if (req.url === '/about' && req.method === 'GET') {
        res.end(`
            <h1>About Page</h1>
            <p>This is the About Page</p>
        `);
    }

    // Contact Page
    else if (req.url === '/contact' && req.method === 'GET') {
        res.end(`
            <h1>Contact Page</h1>
            <p>This is the Contact Page</p>
        `);
    }

    // Page Not Found
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        `);
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});