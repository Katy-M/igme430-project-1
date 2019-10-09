// Highest level of the application that can route to
// all components and children that will be appended to the DOM in index.js

const React = require('react');
const ReactDom = require('react-dom');
const Heading = require('./components/Heading');
const Column = require('./components/Column');

// react components are capitalized
// return an app function component with all the elements of the application
const App = () => {
    return(
        <React.Fragment>
            <Heading title='Plotting Productivity'/>
            <hr></hr>
            <div class="row justify-content-center">
                <Column title='To-Do' />
                <Column title='In Progress' />
                <Column title='Completed' />
            </div>
        </React.Fragment>
    );
};

module.exports.App = App;
