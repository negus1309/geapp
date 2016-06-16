app.controller('accueilController', function($scope, $http, API_URL,createSeanceInfos) {

      // Accès aux commissions et les séances liées
    /*  $http.get(API_URL + "commissions/seances")
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

      $scope.nouveauPV = function($idCommission,$nomCommission){

          //console.log($idCommission)
          //console.log($nomCommission)

          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();

          $http({
            url: API_URL + "seance/create",
            method: "POST",
            params: {'commission_id': $idCommission}
           })
           .success(function(response) {
               //$scope.reponse = response;
               console.log(response)
               //console.log($idCommission)
               //console.log($nomCommission)

               createSeanceInfos.setProperty({'nomCommission':$nomCommission, 'idCommission':$idCommission, 'idSeance':response.id});
               //console.log('maprop'+createSeanceInfos.getProperty());




           });
          /*

          // ok ci dessous

          $http.post(API_URL + "seance/create")
            .success(function(response) {
                //$scope.reponse = response;
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
