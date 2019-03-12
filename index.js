const { createServer } = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const server = createServer();

// Node handles all request by a single request handler
server.on('request', (req, res) => {
	simpleRouting(req, res);
	// HTTPMethods(req, res);
	// handleCookies(req, res);
});

server.listen(PORT, () => {
	console.log(`Starting server at port: ${PORT}`);
});

function simpleRouting(req, res) {
	switch (req.url) {
		case '/':
			// Most simple hello world
			res.end('Hello World!');
			break;
		case '/stream':
			// Steams allow this - we can write in our stream multiple times!
			res.write('Hello');
			res.write(',');
			res.write('World!');
			res.end();
			break;
		case '/stream-fs':
			// Stream piping for res objext and other streams. The piped stream will end automatically when the original one ends
			fs.createReadStream(__filename).pipe(res);
			break;
		case '/header':
			// Setting headers
			res.setHeader('content-type', 'application/json');
			// plain object cannot be send, instead buffers or strings will do
			res.end(JSON.stringify({ data: 42 }));
			break;
		case '/status':
			// Setting statuscodes - two ways
			// res.writeHead(204, 'Oops no content here.');
			res.statusCode = 204;
			res.statucMessage = 'Content is not found';
			res.end();
			break;
	}
}

function HTTPMethods(req, res) {
	if (req.method === 'GET') {
		return res.end('GET method, GET a book!');
	} else if (req.method === 'POST') {
		// Create something new
		return res.end('POST, success!');
	} else {
		console.log(res.statusCode);

		res.statusCode = 400;
		return res.end('Unsupported method');
	}
}

function handleCookies(req, res) {}
