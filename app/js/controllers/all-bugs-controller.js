/**
 * Created by Vlad on 27.05.2017.
 */

'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('AllBugsController', ['$scope', '$http', 'dataContext', 'config', function ($scope, $http, dataContext, config) {

        $scope.initialize = function () {
            dataContext.getAllBugsData().then(bugsData => {
                $scope.bugs = bugsData;
                console.log($scope.bugs)
            });
        };

    }]);
}(angular));
