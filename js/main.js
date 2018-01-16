jQuery(document).ready(function ($) {
    $.ajax({
        url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/autoip.json",
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
            $('.result-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.result-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/NY/NewYork.json",
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
            $('.ny-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.ny-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/UK/London.json",
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
            $('.lond-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.lond-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/australia/sydney.json",
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
            $('.tokyo-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.tokyo-weather-heading').html(weather);
        }
    });
    $.ajax({
        url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/france/paris.json",
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
            $('.paris-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.paris-weather-heading').html(weather);
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
            url: "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/autoip.json",
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
                $('.result-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
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
        var root = "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/";
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
                $('.result-weather-block').html("Current temperature in " + location_city + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Location: (latitude: " + "<b>" + location.lat().toFixed(2) + "</b>" + ", longtitude: " + "<b>" + location.lng().toFixed(2) + "</b>" + ") " + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
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
function sub_form() {
    $('#overlay').fadeIn(400, function () {
        $('#modal_form')
            .css('display', 'block')
            .animate({ opacity: 1, top: '50%' }, 200);
    });
    $("#user_name").val("");
    $("#user_email").val("");
    $("#user_phone").val("");
    return false;
}
$('#modal_close, #overlay').click(function () {
    $('#modal_form')
        .animate({ opacity: 0, top: '45%' }, 200, function () {
        $(this).css('display', 'none');
        $('#overlay').fadeOut(400);
    });
});
function search_form() {
    var country = $("#country").val();
    var city = $("#city").val();
    var root = "https://api.wunderground.com/api/f5b590bbf5a6de61/geolookup/conditions/q/";
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
            $('.result-weather-block').html("Current temperature in " + location + " is: " + "<b>" + temp_c + "°C" + "</b>" + '<br>' + " Feels like: " + "<b>" + feelslike_c + "°C" + "</b>" + '<br>' + "Wind speed: " + "<b>" + wind_mph + " km/h" + "</b>" + '<br>' + "Relative humidity: " + "<b>" + relative_humidity + "</b>" + '<br>' + "Pressure : " + "<b>" + pressure_mb + " mbar" + "</b>");
            $('.result-weather-heading').html(weather);
            $("#country").val("");
            $("#city").val("");
        }
    });
    return false;
}
;
//# sourceMappingURL=main.js.map