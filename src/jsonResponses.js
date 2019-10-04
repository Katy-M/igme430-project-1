const cards = {}; // purely in memory

// takes request, response, status code and object to send
const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const createCard = (request, response, body) => {
  // make sure all the fields are included or send bad request
  if (!body.name || !body.age) {
    const responseJSON = {
      message: 'You must provide both a name and an age.',
      id: 'badRequest',
    };
    return respondJSON(request, response, 400, responseJSON);
  }
  const newCard = {
    name: body.name,
    age: body.age,
  };

  if (cards[newCard.name]) {
    cards[newCard.name] = newCard;
    // return a 204 updated status
    return respondJSON(request, response, 204, newCard);
  }
  // create the new user and return 201 status
  cards[newCard.name] = newCard;
  return respondJSON(request, response, 201, newCard);
};

const notFound = (request, response) => {
  // create error message for response
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  createCard,
  notFound,
};
