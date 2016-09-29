console.log("This file was created on September 20, 2016 by Jackie Torborg.");


//add jquery doc.ready function and event listeners

console.log("app.js is working");

$(document).ready(function() {

    console.log("jQuery is working");


    //event listener
    $('.first').on('click', function() {

        console.log("first button works")
    })

    $('.second').on('click', buttonClick);

    $('.third').on('click', 'button', function() {

        console.log("third button works")
    })

    function buttonClick() {

        console.log("second button works");
    }

});
