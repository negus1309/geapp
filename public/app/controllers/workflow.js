app.controller('workflowController', function($scope, $http, API_URL,$filter,$rootScope) {










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

      // Ajout de champ invités
      $scope.ajouterPointODJ = function(){
        if(!$scope.odj){
          $scope.odj = [];
        }
        $scope.odj.push({'titre':'','contenu':'','heure_debut':'','heure_fin':''});
      }

      $scope.sauvegarderSeance = function(){


        //var dateHuman =
        var dateHuman = $scope.general.date;
        //console.log(dateHuman)
        var dateToPost = convertHumanDateToMysqlDate(dateHuman);


       //var dateToPost = reverse(dateHuman);
       //console.log(dateToPost)

        // infos séances
        var maSeance = {
          'id':$scope.general.idSeance,
          'numero': $scope.general.numero,
          'date': dateToPost,
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

           var mesRubriques = $scope.odj;

           angular.forEach(mesRubriques, function(maRubrique, key) {

              maRubrique.seance_id = maSeance.id;
              var numeroToPost = key + 1;
              maRubrique.numero = numeroToPost;

              console.log(maRubrique)

               $http({
                 url: API_URL + "rubrique/create",
                 method: "POST",
                 params: maRubrique
                })
                .success(function(response) {

                  console.log(response)
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

      // convertir date
      var convertHumanDateToMysqlDate = function(usDate) {
        var dateParts = usDate.split(/(\d{1,2})\-(\d{1,2})\-(\d{4})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }





});
