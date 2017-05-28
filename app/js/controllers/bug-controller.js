'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('BugController', ['$scope', '$http', 'dataContext', 'config','$timeout', function ($scope, $http, dataContext, config,$timeout) {
        let map, geocoder;
        let infoWindow;
        $scope.initialize = function (bugId) {
            let mapOptions = {
                center: new google.maps.LatLng(50.908424, 34.811541),
                zoom: 14,
                disableDefaultUI: true,
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

            dataContext.getBugData(bugId).then(bugData => {
                bugData.date = new Date(bugData.date * 1000).toISOString().slice(0, 10);
                $scope.bug = bugData;

                let latlng = new google.maps.LatLng(bugData.coordinates[0], bugData.coordinates[1]);
                geocoder.geocode({'latLng': latlng}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        $timeout(function () {
                            $scope.adress = results[0].formatted_address;
                        });
                    }else{
                        $timeout(function () {
                            $scope.adress=bugData.coordinates;
                        });
                    }
                });
            });
        };

    }]);
}(angular));