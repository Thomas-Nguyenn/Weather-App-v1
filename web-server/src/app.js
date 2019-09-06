const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Thomas Nguyen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Thomas Nguyen"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    info: "Here you can find all of the information"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Windy",
    location: "Atlanta"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
