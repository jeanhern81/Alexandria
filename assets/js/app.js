$(document).ready(function () {
  // this array holds all the addresses that get submitted in the add property form
  var addressArr = JSON.parse(localStorage.getItem("addresses"));
  var newAddress = "37711 peacock cir rancho mirage ca";
  console.log(getLatLong(newAddress));
});
function getLatLong(a) {
  var queryURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    a +
    "&key=AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(JSON.stringify(response.results[0].geometry.location));
    return;
  });
}
function returnLocation(latLon) {
  return latLon;
}
