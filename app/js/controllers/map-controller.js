'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('MapController', ['$scope', '$http', 'dataContext','config', function ($scope, $http, dataContext, config) {

        let map, geocoder;
        let infoWindow;

        $scope.initialize = function () {
            let mapOptions = {
                center: new google.maps.LatLng(50.908424, 34.811541),
                zoom: 14,
                mapTypeId: 'roadmap',
                streetViewControl: false,
                zoomControl: false,
                styles: config.mapStyle,
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
            // let latlng = new google.maps.LatLng(lat, lng);
            // geocoder.geocode({
            //     'latLng': latlng
            // }, function (results, status) {
            //     if (status === google.maps.GeocoderStatus.OK) {
            //         if (results[1]) {
            //             return results[1];
            //         } else {
            //             alert('No results found');
            //         }
            //     } else {
            //         alert('Geocoder failed due to: ' + status);
            //     }
            // });

        };

        function displayMarkers() {
            dataContext.getMarkersData().then(markersData => {
                let bounds = new google.maps.LatLngBounds();
                for (let i = 0; i < markersData.length; i++) {
                    let latlng = new google.maps.LatLng(markersData[i].coordinates[0], markersData[i].coordinates[1]);
                    let name = markersData[i].bugId;
                    let address1 = markersData[i].description;
                    let address2 = markersData[i].user.__firstName;
                    let postalCode = markersData[i].date;

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