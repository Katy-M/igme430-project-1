// Highest level of the application that can route to
// all components and children that will be appended to the DOM in index.js

const React = require('react');
const ReactDom = require('react-dom');

// react components are capitalized
// return an app function component with all the elements of the application
const App = () => {
    return(
        <div>
            <Heading title='Plotting Productivity'/>
            <Column title='To-Do' />
            <Column title='In Progress' />
            <Column title='Completed' />
        </div>
    );
};

module.exports.App = App;
