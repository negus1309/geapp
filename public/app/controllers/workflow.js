app.controller('workflowController', function($scope, $http, API_URL) {

      // Accès aux commissions et les séances liées
      /*$http.get(API_URL + "commissions/seances")
        .success(function(response) {
            $scope.commissions = response;

        });*/



      // EVENEMENTS

      $scope.editPv = function(){

        $('#liste').hide();
        $('#workflow').show();
        $('div#menu a').show();

      }

      $scope.convertPv = function(){

      }

      $scope.nouveauPV = function($idCommission){

          console.log($idCommission)

          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();


      }



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
