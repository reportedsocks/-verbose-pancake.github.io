jQuery(document).ready(function ($) {
    $.ajax({
        url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/autoip.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];
            var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
            var wind_mph = parsed_json['current_observation']['wind_mph'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var pressure_mb = parsed_json['current_observation']['pressure_mb'];
            var weather = parsed_json['current_observation']['weather'];
            $('.weather-icon').css('background-image', icon);
            $('.result-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
            $('.result-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/NY/NewYork.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];
            var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
            var wind_mph = parsed_json['current_observation']['wind_mph'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var pressure_mb = parsed_json['current_observation']['pressure_mb'];
            var weather = parsed_json['current_observation']['weather'];
            $('.ny-weather-icon').css('background-image', icon);
            $('.ny-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
            $('.ny-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/UK/London.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];
            var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
            var wind_mph = parsed_json['current_observation']['wind_mph'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var pressure_mb = parsed_json['current_observation']['pressure_mb'];
            var weather = parsed_json['current_observation']['weather'];
            $('.lond-weather-icon').css('background-image', icon);
            $('.lond-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
            $('.lond-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/japan/tokyo.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];
            var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
            var wind_mph = parsed_json['current_observation']['wind_mph'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var pressure_mb = parsed_json['current_observation']['pressure_mb'];
            var weather = parsed_json['current_observation']['weather'];
            $('.tokyo-weather-icon').css('background-image', icon);
            $('.tokyo-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
            $('.tokyo-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/france/paris.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];
            var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
            var wind_mph = parsed_json['current_observation']['wind_mph'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var pressure_mb = parsed_json['current_observation']['pressure_mb'];
            var weather = parsed_json['current_observation']['weather'];
            $('.paris-weather-icon').css('background-image', icon);
            $('.paris-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
            $('.paris-weather-heading').html(weather);
        }
    });
    $("#button").on("click", function () {
        var country = $("#country").val();
        var city = $("#city").val();
        var root = "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/";
        if (country != "" && city != "" && country != "Fill the field!" && city != "Fill the field!") {
            $.ajax({
                url: root + country + "/" + city + ".json",
                dataType: "jsonp",
                success: function (parsed_json) {
                    var location = parsed_json['location']['city'];
                    var temp_c = parsed_json['current_observation']['temp_c'];
                    var feelslike_c = parsed_json['current_observation']['feelslike_c'];
                    var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
                    var wind_mph = parsed_json['current_observation']['wind_mph'];
                    var relative_humidity = parsed_json['current_observation']['relative_humidity'];
                    var pressure_mb = parsed_json['current_observation']['pressure_mb'];
                    var weather = parsed_json['current_observation']['weather'];
                    $('.weather-icon').css('background-image', icon);
                    $('.result-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
                    $('.result-weather-heading').html(weather);
                }
            });
            $("#country").val("");
            $("#city").val("");
            $("#country").css('border', "3px solid #384e66");
            $("#country").css('color', "#2b3433");
            $("#city").css('border', "3px solid #384e66");
            $("#city").css('color', "#2b3433");
        }
        else if (country == "" || country == "Fill the field!") {
            $("#country").css('border', "3px solid #692412");
            $("#country").css('color', "#692412");
            $("#country").val("Fill the field!");
        }
        else {
            $("#city").css('border', "3px solid #692412");
            $("#city").css('color', "#692412");
            $("#city").val("Fill the field!");
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        startPosition: 2,
        dots: false
    });
    $("#by_location").on("click", function () {
        $.ajax({
            url: "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/autoip.json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_c = parsed_json['current_observation']['temp_c'];
                var feelslike_c = parsed_json['current_observation']['feelslike_c'];
                var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
                var wind_mph = parsed_json['current_observation']['wind_mph'];
                var relative_humidity = parsed_json['current_observation']['relative_humidity'];
                var pressure_mb = parsed_json['current_observation']['pressure_mb'];
                var weather = parsed_json['current_observation']['weather'];
                $('.weather-icon').css('background-image', icon);
                $('.result-weather-block').html("Current temperature in " + location + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
                $('.result-weather-heading').html(weather);
            }
        });
    });
});
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.4, 30.5),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    google.maps.event.addListener(map, 'click', function (e) {
        var location = e.latLng;
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        var root = "http://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/";
        $.ajax({
            url: root + location.lat().toFixed(2) + "," + location.lng().toFixed(2) + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var location_lat = parsed_json['location']['lat'];
                var location_lon = parsed_json['location']['lon'];
                var location_city = parsed_json['location']['city'];
                var temp_c = parsed_json['current_observation']['temp_c'];
                var feelslike_c = parsed_json['current_observation']['feelslike_c'];
                var icon = 'url(' + parsed_json['current_observation']['icon_url'] + ')';
                var wind_mph = parsed_json['current_observation']['wind_mph'];
                var relative_humidity = parsed_json['current_observation']['relative_humidity'];
                var pressure_mb = parsed_json['current_observation']['pressure_mb'];
                var weather = parsed_json['current_observation']['weather'];
                $('.weather-icon').css('background-image', icon);
                $('.result-weather-block').html("Current temperature in " + location_city + " is: " + temp_c + '<br>' + " Feels like: " + feelslike_c + '<br>' + "Location: (latitude: " + location.lat().toFixed(2) + ", longtitude: " + location.lng().toFixed(2) + ") " + '<br>' + "Wind speed: " + wind_mph + " km/h" + '<br>' + "Relative humidity: " + relative_humidity + '<br>' + "Pressure : " + pressure_mb + " mbar");
                $('.result-weather-heading').html(weather);
            }
        });
    });
}
;
$("#label").hover(onIn, onOut);
function onIn() {
    $(".rules-block").css("display", "block");
}
function onOut() {
    $(".rules-block").css("display", "none");
}
//# sourceMappingURL=main.js.map