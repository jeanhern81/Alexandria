$(document).ready(function () {
   console.log("ready!");
   var zipCode = "91786";
   var address = "747 N Redding Way";
   var addressFormat = address.replace(/ /gi, '%20');
   console.log(addressFormat);
   var city = "Upland";
   var state = "CA";

   //to do: replace address for object of addresses
   var address1;

   // MASHVISOR API CALL

   var temp = null;
   console.log(temp);

   var settings = {
      "async": false,
      "crossDomain": true,
      "url": "https://mashvisor-api.p.rapidapi.com/property?zip_code=" + zipCode + "&address=" + addressFormat + "&city=" + city + "&state=" + state,
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
         "x-rapidapi-key": "733fad01b3msh9d3366df3709f73p1125dcjsn3fcf4af23a02"
      }
   }

   $.ajax(settings).done(function (response) {
      temp = response;
   });
   console.log(temp);

   // ADDs new property from the API call to the HTML
   $('.property-body').append('<div class = "row"  id="property-1" ></div>');
   $('#property-1').append('<div class="col s12"><h6>' + temp.content.address + ', ' + temp.content.city + ', ' + temp.content.state + '</h6></div>');
   $('#property-1').append('<div class="col s3"><span class="teal-text text-lighten-2">Listed Price</span><h6>' + temp.content.listPrice + '</h6></div>');
   $('#property-1').append('<div class="col s3"><span class="teal-text text-lighten-2">Sqft</span><h6>' + temp.content.sqft + '</h6></div>');
   $('#property-1').append('<section class="property-buttons"><div class="col s3"> <a class="waves-effect waves-light btn-large" ><i class="material-icons center">build</i></a > </div><div class="col s3"> <a class="waves-effect waves-light btn-large" ><i class="medium material-icons">monetization_on</i></a ></div></section>');


   // SOME OTHER OBJ CALLS: (change response for temp)
   // $('#update-field').append('<h5> Address:' + response.content.address + '</h5>');
   // $('#update-field').append('<h5> City:' + response.content.city + '</h5>');
   // $('#update-field').append('<h5> List Price:' + response.content.listPrice + '</h5>');
   // $('#update-field').append('<h5> Sqft' + response.content.sqft + '</h5>');
   // $('#update-field').append('<h5> Year Built:' + response.content.yearBuilt + '</h5>');

   // $('#update-field').append('<h5> Home Type:' + response.content.homeType+ '</h5>');

   // $('#update-field').append('<h5> Number of Baths:' + response.content.baths + '</h5>');
   // $('#update-field').append('<h5> Number of Beds:' + response.content.beds + '</h5>');
   // $('#update-field').append('<h5> Parking Sports' + response.content.parkingSpots+ '</h5>');


   // $('#update-field').append('<h5> Latitude:' + response.content.latitude + '</h5>');
   // $('#update-field').append('<h5> Longitude:' + response.content.longitude + '</h5>');

});