// API key Zomato 667597f60811ea00b9750208b4a9755b
$(document).ready(function() {
    $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=83',
            type: 'GET',
            dataType: 'json',
            headers: { 'user-key': '667597f60811ea00b9750208b4a9755b' },

        })
        .done(function(val) {
            //console.log("success");
            //console.log(val)
            val.cuisines.forEach(function(estilos) {
                //console.log("cuisine -> ", estilos.cuisine.cuisine_name);
                var cuisine = estilos.cuisine.cuisine_name; //devuelve 57 tipos de cuisine
                var cuisineId = estilos.cuisine.cuisine_id; //devuelve 57 ids
                //console.log(cuisine);
                $(".dropdown-content").append(`<li>
                <option class="cuisine" value="${contador}" id="${cuisineId}">${cuisine}</option>
                </li>`);


                //la idea era dibujar así en html pero se duplicaba y aparecía fuera del select las opciones en el html
                //$(".cu").append(`
                //      <option class="cuisine" value="${contador}" id="${cuisineId}">${cuisine}</option>
                //    `);
                contador++;
            });

        })
        .fail(function() {
            //console.log("error");
        })
        .always(function() {
            // console.log("yupiii!!!");
        });

    var contador = 1;

    $('select').material_select();

    $(".button-collapse").sideNav();

    //datos mapa

    function initMap() {
        $.ajax({
                url: "https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city&count=20&cuisines=" + varcuisine + "",
                type: 'GET',
                dataType: 'json',
                headers: { 'user-key': '68caa26ae70ec571a32d410254a6c631' }

            })
            .done(function(val) {
                console.log("success");
                console.log(val);
                mapa(val);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

        function mapa(val) {
            var locations = [];
            var direc = val.restaurants;

            direc.forEach(function(rest) {
                var nameRest = rest.restaurant.name;
                var latRest = rest.restaurant.location.latitude;
                var longRest = rest.restaurant.location.longitude;
                locations.push([nameRest, latRest, longRest]);
            });
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: new google.maps.LatLng(-33.4190451, -70.6422571),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                });
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        }
    };

});