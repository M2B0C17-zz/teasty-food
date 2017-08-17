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


    //-----------------datos para el mapa (valores latlang, etc)


    $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city&radius=1000&sort=rating',
            type: 'GET',
            dataType: 'json',
            headers: { 'user-key': '667597f60811ea00b9750208b4a9755b' },

        })
        .done(function(val) {
            console.log("success");
            console.log(val)
            val.restaurants.forEach(function(rests) {
                //console.log("address  -> ", rests.restaurant.location.address);
                //console.log("lat  -> ", rests.restaurant.location.latitude);
                //console.log("lang  -> ", rests.restaurant.location.longitude);
                var address = rests.restaurant.location.address;
                var lat = rests.restaurant.location.latitude;
                var lng = rests.restaurant.location.longitude;

                //google maps api key: AIzaSyA5bGReTZRr7EVyPPFKyeKQ3Gusfb_evKI
                function initMap() {

                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 3,
                        center: { lat: -33.4190451, lng: -70.6422571 }
                    });

                    // Create an array of alphabetical characters used to label the markers.
                    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

                    // Add some markers to the map.
                    // Note: The code uses the JavaScript Array.prototype.map() method to
                    // create an array of markers based on a given "locations" array.
                    // The map() method here has nothing to do with the Google Maps API.
                    var markers = locations.map(function(location, i) {
                        return new google.maps.Marker({
                            position: location,
                            label: labels[i % labels.length]
                        });
                    });

                    // Add a marker clusterer to manage the markers.
                    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                }

                //meter las variables lat y lang de forma dinámica
                var locations = [
                    { lat: -31.563910, lng: 147.154312 },
                    { lat: -33.718234, lng: 150.363181 },
                    { lat: -33.727111, lng: 150.371124 },
                    { lat: -33.848588, lng: 151.209834 },
                    { lat: -33.851702, lng: 151.216968 },
                    { lat: -34.671264, lng: 150.863657 },
                    { lat: -35.304724, lng: 148.662905 },
                    { lat: -36.817685, lng: 175.699196 },
                    { lat: -36.828611, lng: 175.790222 },
                    { lat: -37.750000, lng: 145.116667 },
                    { lat: -37.759859, lng: 145.128708 },
                    { lat: -37.765015, lng: 145.133858 },
                    { lat: -37.770104, lng: 145.143299 },
                    { lat: -37.773700, lng: 145.145187 },
                    { lat: -37.774785, lng: 145.137978 },
                    { lat: -37.819616, lng: 144.968119 },
                    { lat: -38.330766, lng: 144.695692 },
                    { lat: -39.927193, lng: 175.053218 },
                    { lat: -41.330162, lng: 174.865694 },
                    { lat: -42.734358, lng: 147.439506 },
                    { lat: -42.734358, lng: 147.501315 },
                    { lat: -42.735258, lng: 147.438000 },
                    { lat: -43.999792, lng: 170.463352 }
                ]

            });

        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("yupiii!!!");
        });








});