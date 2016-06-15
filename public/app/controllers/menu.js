app.controller('menuController', function($scope, $http, API_URL) {



      // EVENEMENTS

      $scope.retourAccueil = function(){

        $('#liste').show();
        $('#workflow').hide();
        $('div#menu a').hide();

        

        /*
        $http.get(API_URL + "commissions/seances")
          .success(function(response) {
              $scope.commissions = response;
              console.log(response)

          });*/

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
