'use strict';

// Highest level of the application that can route to
// all components and children that will be appended to the DOM in index.js

var React = require('react');
var ReactDom = require('react-dom');
var Heading = require('./components/Heading');
var Column = require('./components/Column');

// react components are capitalized
// return an app function component with all the elements of the application
var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Heading, { title: 'Plotting Productivity' }),
        React.createElement('hr', null),
        React.createElement(
            'div',
            { 'class': 'row justify-content-center' },
            React.createElement(Column, { title: 'To-Do' }),
            React.createElement(Column, { title: 'In Progress' }),
            React.createElement(Column, { title: 'Completed' })
        )
    );
};

module.exports.App = App;
"use strict";

var React = require('react');

var Card = function Card(props) {
  return React.createElement(
    "div",
    { "class": "card container-fluid" },
    React.createElement(
      "h3",
      null,
      props.title
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { "class": "due" },
        "Due Date"
      ),
      React.createElement(
        "li",
        { "class": "priority" },
        "Priority Level",
        React.createElement(
          "select",
          null,
          React.createElement(
            "option",
            { value: "1" },
            "1"
          ),
          React.createElement(
            "option",
            { value: "2" },
            "2"
          ),
          React.createElement(
            "option",
            { value: "3" },
            "3"
          )
        )
      ),
      React.createElement(
        "li",
        { "class": "desc" },
        React.createElement(
          "p",
          null,
          props.desc
        )
      ),
      React.createElement(
        "li",
        { "class": "status" },
        "To-do, in progress, or complete",
        React.createElement(
          "select",
          null,
          React.createElement(
            "option",
            { value: "1" },
            "1"
          ),
          React.createElement(
            "option",
            { value: "2" },
            "2"
          ),
          React.createElement(
            "option",
            { value: "3" },
            "3"
          )
        )
      )
    ),
    React.createElement(
      "button",
      null,
      "Update Card"
    )
  );
};

module.exports.Card = Card;
'use strict';

var React = require('react');
var Card = require('./Card');

var Column = function Column(props) {
    return React.createElement(
        'div',
        { className: 'col-lg-4 col-md-4 column', id: 'todo' },
        React.createElement(
            'h2',
            null,
            props.title
        ),
        React.createElement(Card, { title: 'Example', desc: 'Placeholder lorem ipsum' })
    );
};

module.exports.Column = Column;
"use strict";

var React = require('react');

var Heading = function Heading(props) {
    return React.createElement(
        "div",
        { className: "row justify content center" },
        React.createElement(
            "h1",
            { className: "col-lg-6 col-md-6" },
            props.title
        ),
        React.createElement(
            "button",
            { className: "col-lg-6 col-md-6", id: "createButton" },
            "Create New Card"
        )
    );
};

module.exports.Heading = Heading;
'use strict';

// entry point for react application - renders the "app"
// or main content by appending it to the DOM

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./app.js');

ReactDom.render(React.createElement(App, null), document.getElementById('root'));
