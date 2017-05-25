/**
 * Created by Vlad on 21.05.2017.
 */
'use strict';
(function(angular){

    angular.module('sumyBugTracker').factory('dataContext',['$http', function($http) {
        let factory={};

        factory.getResentBugsData = function() {
            return $http({
                method: 'GET',
                url: '/getResentBugsData'
            }).then(function successCallback(response) {
                return  response.data;
            }, function errorCallback(response) {
                alert('Error while getting recent bugs data! Please, reload page.')
            });
        };

        factory.getBugData = function(bugId) {
            return $http({
                method: 'POST',
                url: '/getBugData',
                data: { id: bugId }
            }).then(function successCallback(response) {
                return  response.data;
            }, function errorCallback(response) {
                alert('Error while getting bug data! Please, reload page.')
            });
        };

        factory.getMarkersData = function() {
            return $http({
                method: 'GET',
                url: '/getMarkersData'
            }).then(function successCallback(response) {
                return  response.data;
            }, function errorCallback(response) {
                alert('Error while getting markers data! Please, reload page.')
            });
        };

        return factory;
    }]);
}(angular));