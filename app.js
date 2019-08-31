const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "https://api.darksky.net/forecast/f0dd357eefbd30c50f6189974c47806a/37.8267,-112";
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.daily.data[0].summary +
//         " It is currently " +
//         response.body.currently.temperature +
//         " degrees out. There is a " +
//         response.body.currently.precipProbability +
//         "% chance of rain."
//     );
//   }
// });

// const geoCodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/atlanta.json?access_token=pk.eyJ1IjoiZGlnaXRhbGdyZWVkIiwiYSI6ImNqd3I0aWJpdTAyY3U0OGx5emllenUxNGkifQ.1mYYMUcKDDwzjjZeczAL4Q";
// request({ url: geoCodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);

//   }
// });

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
