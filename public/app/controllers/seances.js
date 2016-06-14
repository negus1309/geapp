app.controller('seancesController', function($scope, $http, API_URL) {
    //retrieve employees listing from API

    /*$http.get(API_URL + "seances")
      .success(function(response) {
          $scope.seances = response;
      });

    $http.get(API_URL + "seances/commissions")
      .success(function(response) {
          $scope.commissionNoms = response;
      });*/


    /*$http.get(API_URL + "commissions/"++"/seances")
      .success(function(response) {
          $scope.seances = response;
      });*/


      $http.get(API_URL + "commissions")
        .success(function(response) {
            $scope.commissions = response;
            
        })
        .then(function(response){
            console.log('1')

        });

      /*$scope.getSeanceParCommission = function($idCommission){

        console.log($idCommission)


        $http.get(API_URL + "commissions/"+$idCommission+"/seances")
          .success(function(response) {
              $scope.seancesParCommission = response;
          });


      }*/




});
