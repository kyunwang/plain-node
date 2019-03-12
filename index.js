const { createServer } = require('http');

const PORT = process.env.PORT || 8080;

const server = createServer();

server.on('request', (req, res) => {
	res.end('Hello World!');
});

server.listen(PORT, () => {
	console.log(`Starting server at port: ${PORT}`);
});
