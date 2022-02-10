const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let returnValue;
    if (body === '[]') {
      returnValue = "that search didnt work";
    }
    if (error !== null) {
      returnValue = error['code'];
    }
    if (error === null && body !== '[]') {
      const data = JSON.parse(body);
      returnValue = data[0]['description'];
    }
    
    callback(returnValue);
  });

  
};

module.exports = {fetchBreedDescription};


