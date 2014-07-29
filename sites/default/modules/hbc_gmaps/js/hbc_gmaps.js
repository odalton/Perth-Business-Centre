(function ($, Drupal, window, document, undefined) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.hbc_gmaps = {
      attach: function(context, settings) {

      var modulePath = Drupal.settings.hbc_gmaps.pathx;

      var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '<b>Office Hours: 8:30am - 5:30pm Monday to Friday </b>'+
        '<p>22/2 McKay Street, Port Hedland, 6721, Australia</p>'+
        '</div>'+
        '</div>';

      // Google Maps for PP.

      // Lat & Long of Port Hedland.
      var lat = '-20.310040';
      var long = '118.577064';

      // Set cool styles from Snazzy Maps.
      var cool_styles = [
        {
          "featureType": "water",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#acbcc9"
            }
          ]
        },
        {
          "featureType": "landscape",
          "stylers": [
            {
              "color": "#f2e5d4"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c5c6c6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e4d7c6"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fbfaf7"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c5dac6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "lightness": 33
            }
          ]
        },
        {
          "featureType": "road"
        },
        {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "lightness": 20
            }
          ]
        },
        {},
        {
          "featureType": "road",
          "stylers": [
            {
              "lightness": 20
            }
          ]
        }
      ];

      // Google Maps Init JS.
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(lat, long),
          zoom: 16
        };

        // Create map.
        var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);

          map.setOptions(
            {
              draggable: true,
              panControl: true,
              zoomControl: true,
              scrollwheel: true,
              scaleControl: true,
              disableDoubleClickZoom: true,
              styles: cool_styles
            });

      // this is our gem
        google.maps.event.addDomListener(window, "resize", function() {
          var center = map.getCenter();
          google.maps.event.trigger(map, "resize");
          map.setCenter(center);
        });

        // Set Icon marker position on map.
        var marker_position = new google.maps.LatLng(lat, long);

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        // Define marker
        var marker = new google.maps.Marker({
          position: marker_position,
          map: map,
          icon: new google.maps.MarkerImage(modulePath + '/images/hbc-map-icon.svg',
            null, null, null, new google.maps.Size(48,48)),
          title: 'Hello did you know we are based in Ozzy Park!!'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

      }

      google.maps.event.addDomListener(window, 'load', initialize);

    }
  };
})(jQuery, Drupal, this, this.document);