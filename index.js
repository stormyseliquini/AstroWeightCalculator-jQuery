// provide jquery initian function
$(document).ready(function() {

    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];
    /* cycle through the array and get the [1] value for chosen planet (which is the gravity)
     *************
     *************
     */
    $.each(planets, function(index, value) {
        $('#selectPlanet').append(`<option value = '${value[1]}'> ${ value[0] } </option>`);

    });
    /* write calculation and make it on-click
     *************
     *************
     */
    $("button").on("click", calcuLate);

    function calcuLate() {

        // use jquery $ function instead of .getElementById to call the textbox from the html
        var enterWeight = $("#inputWeight").val();

        // reference the planet that is selected to its gravity
        var gravity = $("#selectPlanet").val();


        // multiply the referenced planet gravity with the input weight push it to the html file with jquery method
        var outPut = gravity * enterWeight;
        var newOutPut = Math.round(outPut * 100) / 100;
        $("#outPut").text(newOutPut);
    }
});
