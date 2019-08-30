const request = require("request");

const url =
  "https://api.darksky.net/forecast/f0dd357eefbd30c50f6189974c47806a/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(response.body.currently);
});
