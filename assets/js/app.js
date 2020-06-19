$(document).ready(function () {
	// this array holds all the addresses that get submitted in the add property  form
	var arr = [];
	var latLong;

	// this event takes the inputs from the add property form fields creates variables from them and passes them into the getLatLong function to return latitude and longitude fro google maps api
	$("#addProperty").on("click", function (event) {
		event.preventDefault();

		var addressVal = $("#streetAddress").val();
		var cityVal = $("#city").val();
		var stateVal = $("#state").val();
		var mortgageVal = $("#mortgage").val();
		var rentVal = $("#rent").val();
		// pushes address and info as an object into the arr array
		arr.push({
			address: addressVal,
			city: cityVal,
			state: stateVal,
			mortgage: mortgageVal,
			rent: rentVal,
		});
		// converts the arr array into json and stores it in local storage for use in the properties page
		localStorage.setItem("addresses", JSON.stringify(arr));
	});
	// test's parsing array from json
	var addressArr = JSON.parse(localStorage.getItem("addresses"));

	var newAddress =
		addressArr[0].address + addressArr[0].city + addressArr[0].state;
	// function that takes in an address and returns the latitude and longitude from the google geocode api

	function getLatLong(a) {
		var queryURL =
			"https://maps.googleapis.com/maps/api/geocode/json?address=" +
			a +
			"&key=AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8";
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			var latlon = response.results[0].geometry.location;
			return latlon;
			// Create and save a reference to new empty table row
			// Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
			// Append the td elements to the new table row
			// Append the table row to the tbody element
		});
	}

	getLatLong(newAddress);

	// var map;
	// function initMap(b) {
	// 	map = new google.maps.Map($("#map"), {
	// 		center: b,
	// 		zoom: 8,
	// 	});
	// }
	// initMap(latlon);
});
