const http = require('http');
const url = require('url');

const query = require('querystring');

const htmlResponses = require('./htmlResponses.js');
const jsonResponses = require('./jsonResponses.js');

// querystring module for parsing querystrings from url
// const query = require('querystring');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// handle POST requests
const handlePost = (request, response, parsedUrl) => {
  // post is to /addUser
  if (parsedUrl.pathname === '/createCard') {
    const res = response;

    // uploads come in as a byte stream that we need
    // to reassemble once it's all arrived
    const body = [];

    request.on('error', (err) => {
      console.log(err);
      res.statusCode = 400;
      res.end();
    });

    // on 'data' is for each byte of data that comes in
    // from the upload. We will add it to our byte array.
    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);
      jsonResponses.createCard(request, res, bodyParams);
    });
  }
};


const urlStruct = {
  GET: {
    '/': htmlResponses.getIndex,
    '/style.css': htmlResponses.getStylesheet,
    notFound: jsonResponses.notFound,
  },
  POST:{
    '/createCard': jsonResponses.createCard,
  },
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  // check if a handler for the request is implemented
  if (urlStruct[request.method][parsedUrl.pathname]) {
    // check if method is POST
    if (request.method === 'POST') {
      handlePost(request,response,parsedUrl)
    } else {
      urlStruct[request.method][parsedUrl.pathname](request, response);
    }
  } else {
    urlStruct[request.method].notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on localhost:${port}`);
