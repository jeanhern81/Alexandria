$(document).ready(() => {
    $("#addProperty").on("click", function (event) {
        event.preventDefault();

        var addressVal = $("#streetAddress").val().trim().toUpperCase();
        var cityVal = $("#city").val().trim().toUpperCase();
        var stateVal = $("#state").val().trim().toUpperCase();
        var zipVal = $("#zipCode").val().trim().toUpperCase();
        var purchaseVal = $("#Purchase").val().trim().toUpperCase();
        var expensesVal = $("#expenses").val().trim().toUpperCase();
        var rentVal = $("#rent").val().trim().toUpperCase()
        // creates an object out of the form data from the add property modal
        var newProperty = {
            address: addressVal,
            city: cityVal,
            state: stateVal,
            zip: zipVal,
            purchasePrice: purchaseVal,
            mortgage: expensesVal,
            rent: rentVal
        }
        // makes an ajax call to the /api/newProperty route and sends the object to the server
        $.post("/api/newProperty", newProperty).then((data) => {

            console.log("adding property")




            location.reload();

        })
    });


})