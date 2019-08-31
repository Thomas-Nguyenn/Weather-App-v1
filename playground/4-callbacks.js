setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["Thomas", "Janey", "Jess"];
const shortNames = names.filter(name => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    };

    return data;
  }, 2000);
};

const data = geocode("Atlanta");
console.log(data);
