// ==== VARIABLES AND CONSTANTS ==== //
// const axios = require("axios"); //this is not required. CDN being used at properties.html

//get's information from local storage based on property selection from the properties page
var locationData = localStorage.getItem('location');

// ==== FUNCTIONS ==== //
function displayHeaderAddress (locationArray) {
    if(locationData === null){
        $(".row").append(`Data not found. Return to the Properties page and try again.`);
    }
    else{
        $(".row").append(`<h6> ${locationArray[0]}, ${locationArray[1]}, ${locationArray[2]}</h6>`);
    }
}

function addressFormat(locationData){
    var splitAddress = locationData.split("% ");
    return splitAddress;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function zillowAPI(locationArray){

    // console.log("Zestimate document works");
    axios({
        "method":"GET",
        "url":"https://zillow-com.p.rapidapi.com/search/address",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"zillow-com.p.rapidapi.com",
        "x-rapidapi-key":"733fad01b3msh9d3366df3709f73p1125dcjsn3fcf4af23a02",
        "useQueryString":true
        },"params":{
        "address": locationArray[0],
        "citystatezip":locationArray[1] + " " + locationArray[2],
        // "address":"2114 Bigelow Ave",
        // "citystatezip":"Seattle WA 98109"
        }
        })
        .then((response)=>{
        console.log(response.data);
    
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
        $("#lowValue").text( numberWithCommas(response.data[0].zestimate.valuationRange.low.value));

        //Builds RENT ESTIMATE table

        $("#rentZestimate").text(numberWithCommas(response.data[0].rentzestimate.amount.value));
        $("#highRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.high.value)); 
        $("#lowRentZestimate").text(numberWithCommas(response.data[0].rentzestimate.valuationRange.low.value));

        })
        .catch((error)=>{
        console.log(error, error.response)
        })
}


// ==== CALLS AND LOGIC === //

var locationArray = addressFormat(locationData);
displayHeaderAddress(locationArray);
console.log(locationArray);
zillowAPI(locationArray);


