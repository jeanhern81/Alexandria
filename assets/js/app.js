$(document).ready(function () {
	// this array holds all the addresses that get submitted in the add property  form
	var arr = [];
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

	console.log(addressArr);
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
			console.log(response.results[0].geometry.location);

			// Create and save a reference to new empty table row
			// Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
			// Append the td elements to the new table row
			// Append the table row to the tbody element
		});
	}
});
