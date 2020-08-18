$(document).ready(() => {
    getFromDb()
})
function getFromDb() {
    $.get("/api/", function (data) {
        for (var i = 0; i < data.length; i++) {
            var addressData = data[i].address;
            var cityData = data[i].city;
            var stateData = data[i].state;
            var zipData = data[i].zip;
            var rentData = data[i].rent;
            var mortgageData = data[i].mortgage;

            // taken from lacal storage code
            var propertyDivContainer = $("<div class='container-fluid'>")
            var propertyDiv = $("<div class='row'> ");
            var propertyDivStyle = $("<div class='col'>");
            var addressSpan = $("<span class='propAdd'>")
            var address = $("<h6 class='propAdd' id='address'>").text(
                addressData.toUpperCase())
            var cityState = $("<h6 class='propAdd' id='city/state'>").text(
                " " +
                cityData.toUpperCase() +
                " " +
                stateData.toUpperCase() + " "
                + zipData
            );
            addressSpan.append(address)
            addressSpan.append(cityState)
            // builds out rent display
            var rentDiv = $("<div class='col s3'>");
            var rentStyle = $("<span class='teal-text text-lighten-2'>");

            rentDiv.append(rentStyle);
            rentStyle.text("Monthly Rent: " + rentData);
            // builds out expense display
            var mortgageDiv = $("<div class='col s3'>");
            var mortgageStyle = $("<span class='teal-text text-lighten-2'>");

            mortgageDiv.append(mortgageStyle);
            mortgageStyle.text("Mortgage: " + mortgageData);

            // builds out Z Estimate display
            // var sqftDiv = $("<div class='col s3'>");
            // var sqftStyle = $("<span class='teal-text text-lighten-2'>")

            // sqftDiv.append(sqftStyle).text("sqft: " + addressArr[i].sqFt)
            //  adds formatting for buttons
            var buttonDiv = $('<div class="container-fluid">')
            var buttonStyle = $('<div class="col pull-s4 s12 m12 l12"></div>')

            // builds out wrench icon
            var workIconDiv = $("<div class='col s3'>");
            var workLink = $("<a class='waves-effect waves-light btn-large'>");
            var workIcon = $("<i class='material-icons center'>");

            workIconDiv.append(workLink);
            workLink.append(workIcon);
            workIcon.text("build");
            // builds out money icon
            var moneyIconDiv = $("<div class='col s3'>");
            var moneyLink = $("<a class='waves-effect waves-light btn-large'>");
            var moneyIcon = $("<i class='material-icons center'>");

            moneyIconDiv.append(moneyLink);
            moneyLink.append(moneyIcon);
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
            deleteIcon.text("close")
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
            propertyDiv.append(mortgageDiv);
            // propertyDiv.append(sqftDiv)
            propertyDiv.append(buttonDiv)
            propertyDivContainer.append(propertyDiv)
            $(".property-body").append(propertyDivContainer);
        }
        // on click function to delete properties





    })


}