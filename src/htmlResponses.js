const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const stylesheet = fs.readFileSync(`${__dirname}/../client/styles.css`);

const jsIndex = fs.readFileSync(`${__dirname}/../client/index.js`);
const app = fs.readFileSync(`${__dirname}/../client/app.js`);
const cardComp = fs.readFileSync(`${__dirname}/../client/components/Card.js`);
const colComp = fs.readFileSync(`${__dirname}/../client/components/Column.js`);
const headComp = fs.readFileSync(`${__dirname}/../client/components/Heading.js`);

const parsed = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getStylesheet = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(stylesheet);
  response.end();
};

// need to send back all the react 
const getApp = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  /* response.write(jsIndex);
  response.write(app);
  response.write(cardComp);
  response.write(colComp);
  response.write(headComp); */
  response.write(parsed);
  response.end();
};

module.exports = {
  getIndex,
  getStylesheet,
  getApp,
};
