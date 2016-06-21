app.controller('workflowController', function($scope, $http, API_URL,createSeanceInfos) {



      // Date actuelle pour le placeholder du formulaire
      var date = new Date();
      $scope.currentDate = date;




      // Get infos de la page accueil
      var general = {};
      $scope.$watch(function(){
        $scope.general = createSeanceInfos.getProperty();
        //console.log(createSeanceInfos.getProperty());
        //console.log($scope.general)

      })



      //*******************************************//
      // EVENEMENTS
      //*******************************************//

      // Ajout de champ invités
      $scope.ajouterInvite = function(){
        if(!$scope.general.invites){
          $scope.general.invites = [];
        }
        $scope.general.invites.push({'nom':'','prenom':'','titre':''});
      }

      // Suppression de champ invité
      $scope.supprimerInvite = function($index, $seance_id, $invite_id){

        $scope.general.invites.splice($index,1);
        $http({
          url: API_URL + "seance/"+$seance_id+"/invite/"+$invite_id+"/delete",
          method: "DELETE"
          //params: {'commission_id': $idCommission}
         })
         .success(function(response){
           console.log('furof')
         });

      }


      $scope.sauvegarderSeance = function(){

        // infos séances
        var maSeance = {
          'id':$scope.general.idSeance,
          'numero': $scope.general.numero,
          'date': $scope.general.date,
          'heure_debut':$scope.general.heure_debut,
          'heure_fin':$scope.general.heure_fin,
          'commission_id':$scope.general.idCommission,
          'president_id':1

        };


        $http({
          url: API_URL + "seance/update",
          method: "PUT",
          params: maSeance
         })
         .success(function(response) {

           //console.log(maSeance)
           // infos invites
           var mesInvites = $scope.general.invites;

           angular.forEach(mesInvites, function(monInvite, key) {

             //console.log(monInvite)
             $http({
               url: API_URL + "invite/create",
               method: "POST",
               params: monInvite
              })
              .success(function(response) {

              //  console.log(response.id)
                //console.log(maSeance.id)


                $http({
                  url: API_URL + "assistance/create",
                  method: "POST",
                  params: {'seance_id':maSeance.id,'invite_id':response.id}
                 })
                 .success(function(response) {

                    //console.log(response)


                 });

              });

           });
           UIkit.notify({
               message : '<i class=\'uk-icon-check\'></i>&nbsp;PV sauvegardé!',
               status  : 'success',
               timeout : 3000,
               pos     : 'top-right'
           });

           //console.log(response)




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
