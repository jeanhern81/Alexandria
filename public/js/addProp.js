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

        var newProperty = {
            address: addressVal,
            city: cityVal,
            state: stateVal,
            zip: zipVal,
            purchasePrice: purchaseVal,
            mortgage: expensesVal,
            rent: rentVal
        }

        $.post("/api/newProperty", newProperty).then((data) => {
            console.log(data)
            console.log("adding property")
        })
    });

    addProperty => {

    }
})