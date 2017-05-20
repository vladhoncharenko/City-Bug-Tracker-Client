'use strict';
(function(angular){

angular.module('sumyBugTracker', []).controller('MapController',['$scope', function($scope) { 


var map, geocoder;
var infoWindow;

var markersData = [
   {
	  id: 'F487',
      lat: 50.914997,
      lng: 34.815783,
      name: "Camping Praia ewrewrewr da Barra",
      address1:"Rua Diogo Cão, 125",
      address2: "Praia da Barra",
      postalCode: "3830-772 Gafanha da Nazaré",
	  pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
   },
   {
	  id: '99E7',
      lat: 50.916557,
      lng: 34.805603,
      name: "Camping Costahre rew rew rewreh rehawerh Nova",
      address1:"Quinta dos Patos, n.º 2",
      address2: "Praia da Costa Nova",
      postalCode: "3830-453 Gafanha da Encarnação",
	  pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
   },
   {
	  id: '14W7',
      lat: 50.924857,
      lng: 34.805713,
      name: "Camping Gafanha dar e dghreghe Nazaré",
      address1:"Rua dos Balneários do Complexo Desportivo",
      address2: "Gafanha da Nazaré",
      postalCode: "3830-225 Gafanha da Nazaré",
	  pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
   }
];
$scope.recentBugs = markersData;

// Get map style here: https://mapkit.io/editor
var mapStyle=[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

$scope.initialize =function() {  
   var mapOptions = {
      center: new google.maps.LatLng(50.908424, 34.811541),
      zoom: 14,
      mapTypeId: 'roadmap',
	  streetViewControl: false,
	  zoomControl: false,
	  styles: mapStyle,
   };
   geocoder = new google.maps.Geocoder();
   map = new google.maps.Map(document.getElementById('map'), mapOptions);
   infoWindow = new google.maps.InfoWindow();
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });
   
   displayMarkers();
}  

$scope.getAdressByCoordinates = function(lat, lng){
	
 var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({
    'latLng': latlng
  }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
		  return results[1];
        console.log(results[1]);
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
	
}

function displayMarkers(){
   var bounds = new google.maps.LatLngBounds();  
   for (var i = 0; i < markersData.length; i++){
      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;
      createMarker(latlng, name, address1, address2, postalCode);
      bounds.extend(latlng);  
   }
}

function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   google.maps.event.addListener(marker, 'click', function() {
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
    
      infoWindow.setContent(iwContent);
      infoWindow.open(map, marker);
   });
}
 }]);
}(angular));