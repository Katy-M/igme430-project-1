const http = require('http');
const url = require('url');
const htmlResponses = require('./htmlResponses.js');

// querystring module for parsing querystrings from url
// const query = require('querystring');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlResponses.getIndex,
    '/style.css': htmlResponses.getStylesheet,
  },
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  // check if a handler for the request is implemented
  if (urlStruct[request.method][parsedUrl.pathname]) {
    // check if method is POST
    if (request.method === 'POST') {
      // handle post here
    } else {
      urlStruct[request.method][parsedUrl.pathname](request, response);
    }
  } else {
    // urlStruct[request.method].notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on localhost:${port}`);
