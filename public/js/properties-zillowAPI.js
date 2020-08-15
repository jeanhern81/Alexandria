const axios = require("axios");

// eventually inputs will be coming from the form fields
function getZestimate (){ 
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
        //   console.log(response.data)
        // console.log(response.data[0].zestimate.amount.value)
        var zestimate = response.data[0].zestimate.amount.value;
        console.log(zestimate);

        })
        .catch((error)=>{
        console.log(error)
        })
}
    module.exports =getZestimate;