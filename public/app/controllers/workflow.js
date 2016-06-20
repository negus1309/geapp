app.controller('workflowController', function($scope, $http, API_URL,createSeanceInfos) {

      // Accès aux commissions et les séances liées
      /*$http.get(API_URL + "commissions/seances")
        .success(function(response) {
            $scope.commissions = response;

        });*/

      /*$scope.getMinInfos = function(){

      }*/

      var general = {};
      $scope.$watch(function(){
        $scope.general = createSeanceInfos.getProperty();
        //console.log(createSeanceInfos.getProperty());
        //console.log($scope.general)

      })

      // Date actuelle pour le placeholder du formulaire
      var date = new Date();
      $scope.currentDate = date;

      //console.log('dss'+$scope.currentDate)


      $scope.invites = [];
      $scope.ajouterInvite=function(){
        $scope.invites.push({'nom':'','prenom':'','titre':'','fonction':''});
      }

      //console.log($scope.invites)







      // EVENEMENTS

      $scope.sauvegarderSeance = function(){

        var maSeance = {
          'id':$scope.general.idSeance,
          'numero': $scope.general.numero,
          'date': $scope.general.date,
          'heure_debut':$scope.general.date,
          'heure_fin':$scope.general.date,
          'commission_id':$scope.general.idCommission,
          'president_id':1

        };

        console.log(maSeance)

        $http({
          url: API_URL + "seance/update",
          method: "PUT",
          params: maSeance
         })
         .success(function(response) {

           console.log(response)
           UIkit.notify({
               message : '<i class=\'uk-icon-check\'></i>&nbsp;PV sauvegardé!',
               status  : 'success',
               timeout : 3000,
               pos     : 'top-right'
           });


         });


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
