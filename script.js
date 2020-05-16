$(document).ready(function() {
$("#submitWeather").on("click", function() {
    var searchValue = $("search-value").val();
    searchWeather(searchValue)
});

function searchWeather(value) {
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=26040801b8d9456c798f535d34a73d02&units=imperial",
        dataType: "json",
        success: function(data) {
            console.log(data)
        }
    });
};






});