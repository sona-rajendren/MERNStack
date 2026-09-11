const fs = require('fs');
const http = require('http');

// 1. Create a file and write data
fs.writeFile('student.txt', 'Welcome to Node.js File Handling!', (err) => {
    if (err) {
        console.log('Error while creating file:', err);
        return;
    }

    console.log('1. File created and data written successfully.');

    // 2. Read the file
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error while reading file:', err);
            return;
        }

        console.log('2. File content:', data);

        // 3. Append data to the file
        fs.appendFile(
            'student.txt',
            '\nThis is an additional line.',
            (err) => {
                if (err) {
                    console.log('Error while appending:', err);
                    return;
                }

                console.log('3. Data appended successfully.');

                // 4. Read the updated file
                fs.readFile('student.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.log('Error while reading updated file:', err);
                        return;
                    }

                    console.log('4. Updated file content:', data);
                });
            }
        );
    });
});


// 5. Create HTTP Server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Node.js Web Application</title>
            </head>

            <body>
                <h1>Welcome Message</h1>
                <h2>File Handling and Web Application</h2>
            </body>
        </html>
    `);
});


// 6. Start the server
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});