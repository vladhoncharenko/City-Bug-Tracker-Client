'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('BugController', ['$scope', '$http', 'dataContext','config', function ($scope, $http, dataContext, config) {
        $scope.initialize=function (bugId) {
            dataContext.getBugData(bugId).then(bugData => {
               $scope.bug = bugData;
               alert(bugData)
            });
        };
    }]);
}(angular));