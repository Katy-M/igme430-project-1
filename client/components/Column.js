const React = require('react');
const Card = require('./Card');

const Column = (props) => {
    return(
        <div className="col-lg-4 col-md-4 column" id="todo">
            <h2>{props.title}</h2>
            <Card title = "Example" desc="Placeholder lorem ipsum" />
        </div>
    );
};

module.exports.Column = Column;