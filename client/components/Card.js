const React = require('react');

const Card = (props) => {
    return(
    <div class="card container-fluid">
      <h3>{props.title}</h3>
      <ul>
        <li class="due">Due Date</li>
        <li class="priority">
          Priority Level
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li class="desc">
          <p>{props.desc}</p>
        </li>
        <li class="status">
            To-do, in progress, or complete
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
      </ul>
      <button>Update Card</button>
    </div>
    );
};

module.exports.Card = Card;