app.controller('seancesController', function($scope, $http, API_URL) {
    //retrieve employees listing from API
    $http.get(API_URL + "seances")
            .success(function(response) {
                $scope.seances = response;
            });

});
