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
            dataContext.getResentBugsData().then(bugsData => {
                $scope.recentBugs = bugsData;
            });
        }

        function displayMarkers() {
            dataContext.getMarkersData().then(markersData => {
                let bounds = new google.maps.LatLngBounds();
                for (let i = 0; i < markersData.length; i++) {
                    let latlng = new google.maps.LatLng(markersData[i].coordinates[0], markersData[i].coordinates[1]);
                    let bugId = markersData[i].bugId;
                    let description = markersData[i].description;
                    let date = new Date(markersData[i].date * 1000).toISOString().slice(0,10);
                    let userName = markersData[i].user._firstName + ' ' + markersData[i].user._lastName;
                    createMarker(latlng, bugId, description, date, userName);
                    bounds.extend(latlng);
                }
            });
        }

        function createMarker(latlng, bugId, description, date, userName) {
            let marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: bugId
            });

            google.maps.event.addListener(marker, 'click', function () {
                let iwContent ='<div><a target="_blank" href="http://localhost:5000/bug/'+bugId+'">' + bugId + '</a></div>' +
                        '<div>' + description +'</div>'+
                        userName + '<br />' +
                        date+ '<br />' +
                        "<img style='height:200px' src='http://localhost:5000/pics/" +  bugId + ".jpg'/>";

                infoWindow.setContent(iwContent);
                infoWindow.open(map, marker);
            });
        }
    }]);
}(angular));