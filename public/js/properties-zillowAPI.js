// ==== VARIABLES AND CONSTANTS ==== //
// const axios = require("axios"); //this is not required. CDN being used at properties.html

//get's information from local storage based on property selection from the properties page
var locationData = localStorage.getItem('location');

// ==== FUNCTIONS ==== //
function displayHeaderAddress(locationArray) {
    if (locationData === null) {
        $(".row").append(`Data not found. Return to the Properties page and try again.`);
    }
    else {
        $(".row").append(`<h6> ${locationArray[0]}, ${locationArray[1]}, ${locationArray[2]}</h6>`);
    }
}

function addressFormat(locationData) {
    var splitAddress = locationData.split("% ");
    return splitAddress;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function zillowAPI(locationArray) {

    // console.log("Zestimate document works");
    $.ajax({
        url: "/zillowCall/",
        method: "GET",
        data: { locationArray }
    }).then(function (response) {

        var response = JSON.parse(response)


        //Builds HOME DETAILS data table
        $("#code").text(response.data[0].useCode);
        $("#bedrooms").text(response.data[0].bedrooms);
        $("#bathrooms").text(response.data[0].bathrooms);
        $("#buildingSize").text(numberWithCommas(response.data[0].finishedSqFt));
        $("#lotSize").text(numberWithCommas(response.data[0].lotSizeSqFt));
        $("#yearBuilt").text(numberWithCommas(response.data[0].yearBuilt));

        //Builds MARKET VALUATION table

        $("#zestimate").text(numberWithCommas(response.data[0].zestimate.amount.value));
        $("#highValue").text(numberWithCommas(response.data[0].zestimate.valuationRange.high.value));
        $("#lowValue").text(numberWithCommas(response.data[0].zestimate.valuationRange.low.value));

        //Builds RENT ESTIMATE table

        $("#rentZestimate").text(numberWithCommas(response.data[0].rentzestimate.amount.value));
        $("#highRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.high.value));
        $("#lowRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.low.value));
    })
    //     })
    //         .catch((error) => {
    //             console.log(error, error.response)
    //         })
    // }


    // ==== CALLS AND LOGIC === //
}
var locationArray = addressFormat(locationData);
displayHeaderAddress(locationArray);

zillowAPI(locationArray);


