const { createServer } = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const server = createServer();

server.on('request', (req, res) => {
	// Most simple hello world
	// res.end('Hello World!');

	// Steams allow this - we can write in our stream multiple times!
	// res.write('Hello');
	// res.write(',');
	// res.write('World!');
	// res.end();

	// Stream piping for res objext and other streams. The piped stream will end automatically when the original one ends
	fs.createReadStream(__filename).pipe(res);
});

server.listen(PORT, () => {
	console.log(`Starting server at port: ${PORT}`);
});
