app.controller('mainController', function($scope, $http, API_URL) {





      // EVENEMENTS

      $scope.refreshSeance = function(){

        console.log('dsjhfjfd')
        // Accès aux commissions et les séances liées
        $http.get(API_URL + "commissions/seances")
          .success(function(response) {
              $scope.commissions = response;

          });



      }

      $scope.refreshSeance();





});
