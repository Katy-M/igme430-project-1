const React = require('react');

const Column = (props) => {
    return(
        <div class="col-lg-4 col-md-4 column" id="todo">
            <h2>{props.title}</h2>
        </div>
    );
};

module.exports.Column = Column;