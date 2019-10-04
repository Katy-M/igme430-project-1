// entry point for react application - renders the "app"
// or main content by appending it to the DOM

const React = require('react');
const ReactDom = require('react-dom');
const app = require('./app.js');

ReactDom.render(<App />, document.getElementById('root'));