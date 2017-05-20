'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('MapController', ['$scope', '$http', 'dataContext', function ($scope, $http, dataContext) {

        let map, geocoder;
        let infoWindow;

        // Get map style here: https://mapkit.io/editor
        let mapStyle = [{
            "featureType": "landscape",
            "stylers": [{"hue": "#FFBB00"}, {"saturation": 43.400000000000006}, {"lightness": 37.599999999999994}, {"gamma": 1}]
        }, {
            "featureType": "road.highway",
            "stylers": [{"hue": "#FFC200"}, {"saturation": -61.8}, {"lightness": 45.599999999999994}, {"gamma": 1}]
        }, {
            "featureType": "road.arterial",
            "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 51.19999999999999}, {"gamma": 1}]
        }, {
            "featureType": "road.local",
            "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 52}, {"gamma": 1}]
        }, {
            "featureType": "water",
            "stylers": [{"hue": "#0078FF"}, {"saturation": -13.200000000000003}, {"lightness": 2.4000000000000057}, {"gamma": 1}]
        }, {
            "featureType": "poi",
            "stylers": [{"hue": "#00FF6A"}, {"saturation": -1.0989010989011234}, {"lightness": 11.200000000000017}, {"gamma": 1}]
        }];

        $scope.initialize = function () {
            let mapOptions = {
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
            google.maps.event.addListener(map, 'click', function () {
                infoWindow.close();
            });

            displayMarkers();
            displayResentData();
        };


        function displayResentData() {
            dataContext.getResentBugsData().then(f => {
                $scope.recentBugs = f;
            });
        }

        $scope.getAdressByCoordinates = function (lat, lng) {
            let latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
                'latLng': latlng
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        return results[1];
                    } else {
                        alert('No results found');
                    }
                } else {
                    alert('Geocoder failed due to: ' + status);
                }
            });

        };

        function displayMarkers() {
            dataContext.getMarkersData().then(markersData => {
                let bounds = new google.maps.LatLngBounds();
                for (let i = 0; i < markersData.length; i++) {
                    let latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
                    let name = markersData[i].name;
                    let address1 = markersData[i].address1;
                    let address2 = markersData[i].address2;
                    let postalCode = markersData[i].postalCode;
                    createMarker(latlng, name, address1, address2, postalCode);
                    bounds.extend(latlng);
                }
            });
        }

        function createMarker(latlng, name, address1, address2, postalCode) {
            let marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: name
            });

            google.maps.event.addListener(marker, 'click', function () {
                let iwContent = '<div id="iw_container">' +
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