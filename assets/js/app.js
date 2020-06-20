$(document).ready(function () {
	// this array holds all the addresses that get submitted in the add property  form
	var latLong;
	var arr = [];

	// this event takes the inputs from the add property form fields creates variables from them and passes them into the getLatLong function to return latitude and longitude fro google maps api
	$("#addProperty").on("click", function (event) {
		event.preventDefault();

		var addressVal = $("#streetAddress").val();
		var cityVal = $("#city").val();
		var stateVal = $("#state").val();
		var expensesVal = $("#expenses").val();
		var rentVal = $("#rent").val();
		// pushes address and info as an object into the arr array

		if (localStorage.getItem("addresses") != undefined) {
			arr = JSON.parse(localStorage.getItem("addresses"));
			arr.push({
				address: addressVal,
				city: cityVal,
				state: stateVal,
				expenses: expensesVal,
				rent: rentVal,
			});
		} else {
			arr.push({
				address: addressVal,
				city: cityVal,
				state: stateVal,
				expenses: expensesVal,
				rent: rentVal,
			});
		}
		// converts the arr array into json and stores it in local storage for use in the properties page
		localStorage.setItem("addresses", JSON.stringify(arr));
	});
	// test's parsing array from json
	var addressArr = JSON.parse(localStorage.getItem("addresses"));

	var newAddress =
		addressArr[0].address + addressArr[0].city + addressArr[0].state;
	// function that takes in an address and returns the latitude and longitude from the google geocode api

	var getLatLong = function (a, callback) {
		var queryURL =
			"https://maps.googleapis.com/maps/api/geocode/json?address=" +
			a +
			"&key=AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8";
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			var latlon = response.results[0].geometry.location;
			callback(latlon);
			// Create and save a reference to new empty table row
			// Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
			// Append the td elements to the new table row
			// Append the table row to the tbody element
		});
	};
	var coordinates;

	getLatLong(newAddress, function (latlon) {
		coordinates = latlon;
	});
	console.log(coordinates);
	// var latLon = function () {
	// 	$.ajax({
	// 		url:
	// 			"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8",

	// 		data: {
	// 			address: newAddress,
	// 		},

	// 		dataType: "json",

	// 		success: function (r) {
	// 			if ("success") {
	// 				console.log(JSON.stringify(r.results[0].geometry.location));
	// 				$("#latLon").text(JSON.stringify(r.results[0].geometry.location));
	// 			}
	// 		},
	// 		error: function (e) {
	// 			if ("error") {
	// 				return e;
	// 			}
	// 		},
	// 	});
	// };
	// console.log(latLon);
});
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
