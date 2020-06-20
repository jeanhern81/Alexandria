$(document).ready(function () {
	// this array holds all the addresses that get submitted in the add property  form

	// var arr = [];

	// // this event takes the inputs from the add property form fields creates variables from them and passes them into the getLatLong function to return latitude and longitude fro google maps api
	// $("#addProperty").on("click", function (event) {
	// 	event.preventDefault();

	// 	var addressVal = $("#streetAddress").val().trim();
	// 	var cityVal = $("#city").val().trim();
	// 	var stateVal = $("#state").val().trim();
	// 	var expensesVal = $("#expenses").val().trim();
	// 	var rentVal = $("#rent").val().trim();
	// 	// pushes address and info as an object into the arr array

	// 	if (localStorage.getItem("addresses") != undefined) {
	// 		arr = JSON.parse(localStorage.getItem("addresses"));
	// 		arr.push({
	// 			address: addressVal,
	// 			city: cityVal,
	// 			state: stateVal,
	// 			expenses: expensesVal,
	// 			rent: rentVal,
	// 		});
	// 	} else {
	// 		arr.push({
	// 			address: addressVal,
	// 			city: cityVal,
	// 			state: stateVal,
	// 			expenses: expensesVal,
	// 			rent: rentVal,
	// 		});
	// 	}
	// 	// converts the arr array into json and stores it in local storage for use in the properties page
	// 	localStorage.setItem("addresses", JSON.stringify(arr));
	// 	location.reload(true);
	// 	getFromLocal();
	// });
	// test's parsing array from json
	var addressArr = JSON.parse(localStorage.getItem("addresses"));

	// var newAddress =
	// 	addressArr[0].address + addressArr[0].city + addressArr[0].state;
	// function that takes in an address and returns the latitude and longitude from the google geocode api
	var newAddress = "37711 peacock cir rancho mirage ca";

	// getZillow();
	// var location = getLatLong(newAddress);
	// console.log(location.lat);
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
		// console.log(response.results[0].geometry);
		// var latLon = response.results[0].geometry.location;
		// returnLocation(latLon);
		// callback(latlon);
	});
}
function returnLocation(latLon) {
	return latLon;
}
// function getZillow() {
// 	var queryURL =
// 		"http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1dxir1f12bv_6bk45&address=879+W+23rd+Street&citystatezip=Los+Angeles%2C+CA&rentzestimate=true";
// 	$.ajax({
// 		url: queryURL,
// 		method: "GET",
// 	}).then(function (response) {
// 		// console.log(response.results[0].geometry);
// 		return response;
// 		// callback(latlon);
// 	});
// }

// 	var geocoder;
// 	var map;
// 	var address = "San Diego, CA";

// 	function initialize() {
// 		geocoder = new google.maps.Geocoder();
// 		var latlng = new google.maps.LatLng(-34.397, 150.644);
// 		var myOptions = {
// 			zoom: 8,
// 			center: latlng,
// 			mapTypeControl: true,
// 			mapTypeControlOptions: {
// 				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
// 			},
// 			navigationControl: true,
// 			mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		};
// 		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
// 		if (geocoder) {
// 			geocoder.geocode(
// 				{
// 					address: address,
// 				},
// 				function (results, status) {
// 					if (status == google.maps.GeocoderStatus.OK) {
// 						if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
// 							map.setCenter(results[0].geometry.location);

// 							var infowindow = new google.maps.InfoWindow({
// 								content: "<b>" + address + "</b>",
// 								size: new google.maps.Size(150, 50),
// 							});

// 							var marker = new google.maps.Marker({
// 								position: results[0].geometry.location,
// 								map: map,
// 								title: address,
// 							});
// 							google.maps.event.addListener(marker, "click", function () {
// 								infowindow.open(map, marker);
// 							});
// 						} else {
// 							alert("No results found");
// 						}
// 					} else {
// 						alert(
// 							"Geocode was not successful for the following reason: " + status
// 						);
// 					}
// 				}
// 			);
// 		}
// 	}
// 	google.maps.event.addDomListener(window, "load", initialize);
// 	// var map;
// 	// function initMap(b) {
// 	// 	map = new google.maps.Map($("#map"), {
// 	// 		center: b,
// 	// 		zoom: 8,
// 	// 	});
// 	// }
// 	// initMap(latlon);
// });
