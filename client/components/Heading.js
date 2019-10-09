const React = require('react');

const Heading = (props) => {
    return(
        <div className="row justify content center">
            <h1 className="col-lg-6 col-md-6">{props.title}</h1>
            <button className="col-lg-6 col-md-6" id="createButton">Create New Card</button>
        </div>
    );
};

module.exports.Heading = Heading;