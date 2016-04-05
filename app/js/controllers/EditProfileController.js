'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, $route, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

    }
);