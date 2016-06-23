app.controller('gestionPresenceController', function($scope, $http, API_URL, $rootScope) {



  $rootScope.getDeputes = function($idCommission){


    $http.get(API_URL + "commissions/"+$idCommission+"/deputes")
      .success(function(response) {
          $scope.deputes = response;

      });

  }




});
