const request = require('request');
const userInput = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function (error, response, body) {
  console.log('statusCode:', response && response.statusCode);
  if(response) {
    const data = JSON.parse(body);
    if(data[0] === undefined) {
      console.log("Breed Not Found");
      return
    }
    console.log(data[0]['description']);
    return
  }
  if (error['code'] === "ENOTFOUND") {
    console.log("Webpage was not loaded correctly");
    return;
  }
});