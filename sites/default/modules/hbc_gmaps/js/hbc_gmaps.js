// Google Maps for PP.

// Lat & Long of Port Hedland.
var lat = '-20.310383';
var long = '118.583571';

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
        draggable: false,
        panControl: false,
        zoomControl: false,
        scrollwheel: false,
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

  // Define marker
  var marker = new google.maps.Marker({
    position: marker_position,
    map: map,
    title: 'Hello did you know we are based in Ozzy Park!!'
  });

}



google.maps.event.addDomListener(window, 'load', initialize);