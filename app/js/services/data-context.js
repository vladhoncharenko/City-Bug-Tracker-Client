/**
 * Created by Vlad on 21.05.2017.
 */
'use strict';
(function(angular){

    angular.module('sumyBugTracker').factory('dataContext',['$http', function($http) {
        let factory={};

        factory.getResentBugsData = function(bugsAmount) {
            return $http({
                method: 'GET',
                url: '/getResentBugsData?amount='+bugsAmount
            }).then(function successCallback(response) {
                return  response.data;
            }, function errorCallback(response) {
                alert('Error while getting recent bugs data! Please, reload page.')
            });
        };

        return factory;
    }]);
}(angular));