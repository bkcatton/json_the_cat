const request = require('request');
const userInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function (error, response, body) {
  
  if (error !== null) {
    console.log("Error with request: ", error['code'], "at ", error['hostname']);
    return
  }
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  if (body === '[]') {
    console.log("that search didnt work");
    return
  }

  const data = JSON.parse(body);
  console.log(data[0]['description']);
  console.log(typeof data);

});
