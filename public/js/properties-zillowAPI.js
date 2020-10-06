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

        var res = JSON.parse(response)
        console.log(res.result[0]);

        console.log(res.result[0].zestimate[0].valuationRange[0].high[0]._);

        //Builds HOME DETAILS data table
        // $("#code").text(response.data[0].useCode);
        // $("#bedrooms").text(response.data[0].bedrooms);
        // $("#bathrooms").text(response.data[0].bathrooms);
        // $("#buildingSize").text(numberWithCommas(response.data[0].finishedSqFt));
        // $("#lotSize").text(numberWithCommas(response.data[0].lotSizeSqFt));
        // $("#yearBuilt").text(numberWithCommas(response.data[0].yearBuilt));

        //Builds MARKET VALUATION table

        $("#zestimate").text(numberWithCommas(res.result[0].zestimate[0].amount[0]._));
        $("#highValue").text(numberWithCommas(res.result[0].zestimate[0].valuationRange[0].high[0]._));
        $("#lowValue").text(numberWithCommas(res.result[0].zestimate[0].valuationRange[0].low[0]._));

        // //Builds RENT ESTIMATE table

        // $("#rentZestimate").text(numberWithCommas(response.data[0].rentzestimate.amount.value));
        // $("#highRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.high.value));
        // $("#lowRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.low.value));
    })
    //     })
    .catch(function(error){
        console.log(error);
    });
    // }


    // ==== CALLS AND LOGIC === //
}
var locationArray = addressFormat(locationData);
displayHeaderAddress(locationArray);

zillowAPI(locationArray);


