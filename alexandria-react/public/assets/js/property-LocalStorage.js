$(document).ready(function () {
// ==== VARIABLES AND CONSTANTS ====
var arr = [];

// ==== FUNCTIONS ====
// Loads existing properties from local storage
function getFromLocal() {

    // checks if addresses object in local storage exists
    if (localStorage.getItem("addresses") != undefined) {

        // if address object does exist this pulls the object and saves it as an array
        var addressArr = JSON.parse(localStorage.getItem("addresses"));

        // for loop runs through addressArr and dynamically builds out properties
        for (i = 0; i < addressArr.length; i++) {
        // builds out property div
            var propertyDivContainer = $("<div class='container-fluid'>")
            var propertyDiv = $("<div class='row'> ");
            var propertyDivStyle = $("<div class='col'>");
            var addressSpan = $("<span class='propAdd'>")
            var address = $("<h6 class='propAdd' id='address'>").text(
                addressArr[i].address.toUpperCase())
            var cityState = $("<h6 class='propAdd' id='city/state'>").text(
                " " +
                addressArr[i].city.toUpperCase() +
                " " +
                addressArr[i].state.toUpperCase() + " "
                + addressArr[i].zip.toUpperCase()
            );
            addressSpan.append(address)
            addressSpan.append(cityState)
        // builds out rent display
            var rentDiv = $("<div class='col s3'>");
            var rentStyle = $("<span class='teal-text text-lighten-2'>");

            rentDiv.append(rentStyle);
            rentStyle.text("Monthly Rent: " + addressArr[i].rent);
        // builds out expense display
            var expenseDiv = $("<div class='col s3'>");
            var expenseStyle = $("<span class='teal-text text-lighten-2'>");

            expenseDiv.append(expenseStyle);
            expenseStyle.text("Monthly Expenses: " + addressArr[i].expenses);

        // builds out Z Estimate display
            var ZestimateDiv = $("<div class='col s3'>");
            var ZestimateStyle = $("<span class='teal-text text-lighten-2'>");
// !!==  HERE  ===!!!!
            ZestimateDiv.append(ZestimateStyle).html(`<a value="${addressArr[i].address.toUpperCase() +'% '+ addressArr[i].city.toUpperCase() +'% ' +
            addressArr[i].state.toUpperCase() + ' ' + addressArr[i].zip.toUpperCase()}" class="property-details" href="properties-details.html">Property Details...</a>`);

// !!==  HERE  ===!!!!        
        //  adds formatting for buttons
            var buttonDiv = $('<div class="container-fluid">');
            var buttonStyle = $('<div class="col pull-s4 s12 m12 l12"></div>');

        // builds out wrench icon
            var workIconDiv = $("<div class='col s3'>");
            var workLink = $("<a class='waves-effect waves-light btn-large'>");
            var workIcon = $("<i class='material-icons center'>");

            //workIconDiv.append(workLink);
            //workLink.append(workIcon);
            workIcon.text("build");


        // builds out money icon
            var moneyIconDiv = $("<div class='col s3'>");
            var moneyLink = $("<a class='waves-effect waves-light btn-large'>");
            var moneyIcon = $("<i class='material-icons center'>");


            //moneyIconDiv.append(moneyLink);
            //moneyLink.append(moneyIcon);
            moneyIcon.text("monetization_on");

        // builds out map icon
            var mapIconDiv = $("<div class='col s3'>");
            var mapLink = $("<a class='waves-effect waves-light btn-large modal-trigger' href='#propertyMap'>");
            var mapIcon = $("<i class='material-icons center'>");

            mapIconDiv.append(mapLink).on("click", function () {
                console.log($(this).parent().parent().siblings()[0].textContent)
                getLatLong($(this).parent().parent().siblings()[0].textContent)

                var mapTextH6 = $("<h6>")
                $("#mapTitle").html(mapTextH6)
                mapTextH6.text($(this).parent().parent().siblings()[0].textContent)


            })
            mapLink.html(mapIcon)
            mapIcon.text("map")
            // builds out delete icon

            var deleteIconDiv = $("<div class='col s3' id='delete'>");
            var deleteLink = $("<a class='waves-effect waves-light btn-large ' href=''>");

            var deleteIcon = $("<i class='material-icons center' >");
            deleteIcon.text("delete")
            deleteLink.append(deleteIcon)
            deleteIconDiv.append(deleteLink)


            buttonSec = $('<section class="property-buttons">')
            // appends buttons to formatted div
            buttonSec.append(moneyIconDiv);
            buttonSec.append(workIconDiv);
            buttonSec.append(mapIconDiv)
            buttonSec.append(deleteIconDiv)

            buttonDiv.append(buttonStyle)
            buttonDiv.append(buttonSec)

            // appends property to body
            propertyDivStyle.append(addressSpan);
            propertyDiv.append(propertyDivStyle);
            propertyDiv.append(rentDiv);
            propertyDiv.append(expenseDiv);
            propertyDiv.append(ZestimateDiv)
            propertyDiv.append(buttonDiv)
            propertyDivContainer.append(propertyDiv)
            $(".property-body").append(propertyDivContainer);
        }
        // on click function to delete properties
        $(document).on("click", "#delete", function () {

            var results = [];
            // location of the address div
            var toSearch = $(this).parent().parent().siblings().find("#address")[0].textContent;
            // for loop that runs through the address array and checks for matching address to remove
            for (var i = 0; i < addressArr.length; i++) {
                // if statement that checks if the address matched the address value of any of the array objects
                if (addressArr[i].address.toUpperCase().indexOf(toSearch) != -1) {
                    // if it is found this removes that object from the array
                    addressArr.splice(i, 1)
                    // once removed from the array this pushes the remaining array back into local storage
                    localStorage.setItem("addresses", JSON.stringify(addressArr))
                }
            }
        })
    }
    // $("#property-details").on("click", function () {
    //     // event.preventDefault();
    //     // console.log("button does work!!!");
    //     $('#property-header').text('It works!!');
    //     });
        
    //     $('#property-header').text('DTTTD');
}

// Takes in an address and hits the google geocode api, the api then returns a response in the form of a json object
function getLatLong(a) {
    var queryURL =
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        a +
        "&key=AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        // this takes in the response from the geocode api traverses the object to get the latitude and longitude object
        var address = response.results[0].geometry.location;
        // the function then calls the init map function and passes in the latitude and longitude object
        initMap(address);


    });
}

// Uses google's map api to build a map and place a  marker. It takes in an object containing  
// the latitude and  longitude coordinates builds a map and places a marker at those coordinates
function initMap(mark) {
    // The location of property
    var address = mark;
    // The map, centered at property address chosen
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: address,
    });
    // The marker, positioned at the property address chosen
    var marker = new google.maps.Marker({ position: address, map: map });
}

function getZillow() {

    if (localStorage.getItem("addresses") != undefined) {

        var array = JSON.parse(localStorage.getItem("addresses"))
        // console.log(array)
        for (i = 0; i < array.length; i++) {
            if (array[i].Zestimate === undefined) {

                var zestimate ;

                var address = array[i].address.replace(/ /gi, '%20')
                var city = array[i].city.replace(/ /gi, '%20');
                var state = array[i].state
                var zipCode = array[i].zip
                // console.log(address)
                // console.log(city)
                // console.log(state)
                // console.log(zipCode)
                var temp = null;
                // console.log('temp is:' + temp);

                axios({
                    "method":"GET",
                    "url":"https://zillow-com.p.rapidapi.com/search/address",
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"zillow-com.p.rapidapi.com",
                    "x-rapidapi-key":"733fad01b3msh9d3366df3709f73p1125dcjsn3fcf4af23a02",
                    "useQueryString":true
                    },"params":{
                    "address":"2114 Bigelow Ave",
                    "citystatezip":"Seattle WA 98109"
                    }
                    })
                    .then((response)=>{

                    // temp= response;
                    // console.log(temp);
                    
                    // zestimate = JSON.stringify(response.data[0].zestimate.amount.value) ;
                    // console.log('THE RESPONSE IS: ' + zestimate);
                    
                    array[i].Zestimate = JSON.stringify(response.data[0].zestimate.amount.value);


                    })
                    .catch((error)=>{
                    console.log(error, error.response)
                    });
                    
                    //Dummy placeholder
                    // array[i].Zestimate = "$ 1,000.000";
                    console.log('THE RESPONSE outisde is: ' + zestimate);
                    // array[i].Zestimate = zestimate;

                    localStorage.setItem("addresses", JSON.stringify(array))

            } 
        }
    }
}

// ==== LOGIC AND FUNCTION CALLS
getFromLocal();
// getZillow();
$("#addProperty").on("click", function (event) {
    event.preventDefault();

    var addressVal = $("#streetAddress").val().trim().toUpperCase();
    var cityVal = $("#city").val().trim().toUpperCase();
    var stateVal = $("#state").val().trim().toUpperCase();
    var zipVal = $("#zipCode").val().trim().toUpperCase();
    var expensesVal = $("#expenses").val().trim().toUpperCase();
    var rentVal = $("#rent").val().trim().toUpperCase();
    // pushes address and info as an object into the arr array

    //checks if LS is empty. If not empty loads previous inputs.
    if (localStorage.getItem("addresses") != undefined) {
        arr = JSON.parse(localStorage.getItem("addresses"));
        arr.push({
            address: addressVal,
            city: cityVal,
            state: stateVal,
            zip: zipVal,
            expenses: expensesVal,
            rent: rentVal,
        });
    //if no data store in LS, then the form will push to array
    } else {
        arr.push({
            address: addressVal,
            city: cityVal,
            state: stateVal,
            zip: zipVal,
            expenses: expensesVal,
            rent: rentVal,
        });

    }
    // converts the arr array into json and stores it in local storage for use in the properties page
    localStorage.setItem("addresses", JSON.stringify(arr));
    //this reloads the current URL
    location.reload(true);
    getFromLocal();
    // getZillow()

});

}) //end of document.ready
