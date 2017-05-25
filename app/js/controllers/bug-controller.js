'use strict';
(function (angular) {
    angular.module('sumyBugTracker').controller('BugController', ['$scope', '$http', 'dataContext', 'config', function ($scope, $http, dataContext, config) {

        $scope.initialize = function (bugId) {
            dataContext.getBugData(bugId).then(bugData => {
                bugData.date = new Date(bugData.date * 1000).toISOString().slice(0, 10);
                $scope.bug = bugData;
            });
        };

    }]);
}(angular));