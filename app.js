$(document).ready(function () {

    $('#submitWeather').click(function () {

        var city = $("#city").val();
        console.log(city)
        getWeather(city)
       if (city != '') {


       } else {
           $("#error").html('Field cannot be empty');
       }

    });

    function getWeather(search) {
        $.ajax({
           
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + search + "&appid=26040801b8d9456c798f535d34a73d02&units=imperial",
            method: "GET",
           // {
        //        console.log(data)
        //         var widget = show(data);
        //         $("#show").html(widget);
        //         $("#city").val('');
        //         console.log(data.wind.speed)
        //    }

        })
       .then(function(data) {
           console.log(data)
                      var widget = show(data);
                      //var icons = $("<img>").attr("src", "https://openweathermap.org/img/wn/"+"03d"+"@2x.png")
                $("#show").html(widget);
                $("#city").val('');
                console.log(data.wind.speed)

        });
    }
    function show(data) {
        return this.data + "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lat + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lon + "</h3>" + "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" + "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>";
    
    
    
    }
    function fiveDayWeather(data){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + "&appid=26040801b8d9456c798f535d34a73d02&units=imperial",
            method: "GET",
    }).then(function(data){
        for(var i= 0; i <= data.list.length; i++){
            function show(data){
                return this.data + "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lat + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lon + "</h3>" + "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" + "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>";
    
            }
            // return this.data + "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lat + "</h3>" + "<h3><strong>UV Index</strong>: " + data.coord.lon + "</h3>" + "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" + "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>";
        }
    })
    }
    // function fiveDayWeather(data){
    //     type: "GET",
    //         url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + "&appid=26040801b8d9456c798f535d34a73d02&units=imperial",
    //         dataType: "json",
    // }
});
