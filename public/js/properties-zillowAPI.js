var locationData = localStorage.getItem('location');
console.log(locationData);

// const axios = require("axios"); //this is not required. CDN being used at properties.html

function zillowAPI(location){

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
        "address":"2114 Bigelow Ave",
        "citystatezip":"Seattle WA 98109"
        }
        })
        .then((response)=>{
        console.log(response.data);
        //   console.log(response.data)
        // console.log(response.data[0].zestimate.amount.value)
        // var zestimate = response.data;
        // console.log(zestimate);

        $("#bedrooms").text(response.data[0].bedrooms);
        $("#bathrooms").text(response.data[0].bathrooms);
        $("#buildingSize").text(response.data[0].finishedSqFt);
        $("#lotSize").text(response.data[0].lotSizeSqFt);
        $("#yearBuilt").text(response.data[0].yearBuilt);
        
        $("#zestimate").text(response.data[0].zestimate.amount.value);
        $("#highValue").text(response.data[0].zestimate.valuationRange.high.value);
        $("#lowValue").text(response.data[0].zestimate.valuationRange.low.value);
        $("#rentZestimate").text(response.data[0].rentzestimate.amount.value);




        // console.log(response.data[0].bedrooms);

        })
        .catch((error)=>{
        console.log(error, error.response)
        })
}

zillowAPI(location);


// $(".property-body").on("click", ".property-details", function () {
//     var location = $(this).attr("value");
//     console.log(location);
//     // zillowAPI(location);
//     // console.log("THe second page works!!");
// });

