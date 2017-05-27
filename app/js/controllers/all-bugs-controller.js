/**
 * Created by Vlad on 27.05.2017.
 */

'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('AllBugsController', ['$scope', '$http', 'dataContext', 'config', function ($scope, $http, dataContext, config) {
        let map, geocoder;
        let infoWindow;
        $scope.initialize = function () {

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


            dataContext.getAllBugsData().then(bugsData => {
                bugsData.forEach(item=>{
                    item.date = new Date(item.date * 1000).toISOString().slice(0, 10);
                });
                $scope.bugs = bugsData;
                $scope.$broadcast('rebuild:me');
            });
        };

    }]);
}(angular));
