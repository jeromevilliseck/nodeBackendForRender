const http = require('http');

const server = http.createServer((req, res) => {
    res.end('voila la reponse du premier serveur');
});

server.listen(process.env.port || 3000);