import React from 'react'
import $ from "jquery";

//Styling sheet
import "../index.css";

export default function DeleteButton() {
    return (
        <div>
    $(document).on("click", "#delete", function () {
    // this for the warning popup to confirm deletion
    var txt;
    if (confirm("Press OK to DELETE or press CANCEL to go back!")) {
        txt = "You pressed OK to DELETE"


        // location of the address div
        var id = this.dataset.id;
        // .parent().parent().siblings().find("#address")[0]


        $.ajax({
            method: "DELETE",
            url: "/api/" + id
        }).then(() => {
            location.reload()
        })
        document.getElementById("demo").innerHTML = txt;
    } else {
        txt = "You pressed CANCEL to go back";
    }

})

        </div>
    )
}
