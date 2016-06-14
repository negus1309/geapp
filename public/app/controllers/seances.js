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


      $http.get(API_URL + "commissions/seances")
        .success(function(response) {
            $scope.commissions = response;

        });

          /*$('div.uk-accordion.ng-scope').on('toggle.uk.accordion', function(){

            console.log(this)
            console.log('test')
          //  $('.span.arrow-accordion')
        })*/

      /*  $scope.changeIcon = function($event){
          console.log($event.currentTarget)
          //$(this).remove();

        }
*/


      /*$scope.getSeanceParCommission = function($idCommission){

        console.log($idCommission)


        $http.get(API_URL + "commissions/"+$idCommission+"/seances")
          .success(function(response) {
              $scope.seancesParCommission = response;
          });


      }*/




});
