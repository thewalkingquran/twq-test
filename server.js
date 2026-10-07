const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hosting Advisor Auto Deploy Test</title>
      </head>
      <body>
        <h1>Hosting Advisor Auto Deploy Test</h1>
        <p>Version 1 - Initial Deployment</p>
      </body>
    </html>
  `);
}).listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
