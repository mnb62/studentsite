// Initialize and add the map
function initMap() {
  // The location of Sure Shot Cafe
  var sureshot = {lat: 21.305705, lng: -157.838223}; 
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: sureshot});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: sureshot, map: map});}