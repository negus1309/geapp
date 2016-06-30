app.controller('workflowController', function($scope, $http, API_URL,$filter,$rootScope) {


  //$scope.pv = {}
  //$scope.pv.commission = {}

  $scope.nomCommissions = JSON.parse(localStorage.getItem('commissions'));





  $scope.showc = function(){
    console.log($scope.pv)
  }

  //$scope.$watch($rootScope)
  // Jquery accordion
  $(document).ready(function() {
      function close_accordion_section() {
          $('.accordion .accordion-section-title').removeClass('active');
          $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
      }

      $('#workflow').on('click', '.accordion-section-title' ,function(e) {
          // Grab current anchor value
          console.log('oui')
          var currentAttrValue = $(this).attr('href');

          if($(e.target).is('.active')) {
              close_accordion_section();
          }else {
              close_accordion_section();

              // Add active class to section title
              $(this).addClass('active');
              // Open up the hidden content panel
              $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
          }

          e.preventDefault();
      });
  });





      //*******************************************//
      // EVENEMENTS
      //*******************************************//

      // Ajout de champ invités
      $scope.ajouterInvite = function(){
        if(!$scope.pv.invites){
          $scope.pv.invites = [];
        }
        $scope.pv.invites.push({'nom':'','prenom':'','titre':''});
      }



      // Suppression de champ invité
      $scope.supprimerInvite = function($index, $seance_id, $invite_id){

        $scope.pv.invites.splice($index,1);
        /*
        $http({
          url: API_URL + "seance/"+$seance_id+"/invite/"+$invite_id+"/delete",
          method: "DELETE"
          //params: {'commission_id': $idCommission}
         })
         .success(function(response){
           console.log('furof')
         });*/

      }

      // Ajout de champ invités
      $scope.ajouterPointODJ = function(){
        if(!$scope.pv.rubriques){
          $scope.pv.rubriques = [];
        }
        $scope.pv.rubriques.push({'titre':'','contenu':'','heure_debut':'','heure_fin':''});
      }
      // Suppression de champ invité
      $scope.supprimerRubrique = function($index, $seance_id, $rubrique_id){

        $scope.pv.rubriques.splice($index,1);
        /*
        $http({
          url: API_URL + "seance/"+$seance_id+"/rubrique/"+$rubrique_id+"/delete",
          method: "DELETE"
          //params: {'commission_id': $idCommission}
         })
         .success(function(response){
           console.log('furof')
         });*/

      }

      $scope.sauvegarderSeance = function(){



        var tousMesPv = JSON.parse(localStorage.getItem('mesPv')) || [];

        var monNouveauPv = $scope.pv;


        angular.forEach(tousMesPv, function(unPv, key) {

          if(unPv.token == monNouveauPv.token){
            tousMesPv.splice(key,1)
          }


        });



        tousMesPv.push(monNouveauPv);

        localStorage.setItem('mesPv', JSON.stringify(tousMesPv));

        UIkit.notify({
            message : '<i class=\'uk-icon-check\'></i>&nbsp;PV sauvegardé en local!',
            status  : 'success',
            timeout : 3000,
            pos     : 'top-right'
        });





        var isOnline = false;

        if(isOnline){

          //var dateHuman =
          var dateHuman = $scope.general.date;
          //console.log(dateHuman)
          var dateToPost = convertHumanDateToMysqlDate(dateHuman);


         //var dateToPost = reverse(dateHuman);
         //console.log(dateToPost)

          // infos séances
          var maSeance = {
            'id':$scope.meta.idSeance,
            'numero': $scope.general.numero,
            'date': dateToPost,
            'heure_debut':$scope.general.heure_debut,
            'heure_fin':$scope.general.heure_fin,
            'commission_id':$scope.meta.idCommission,
            'president_id':1

          };


          $http({
            url: API_URL + "seance/update",
            method: "PUT",
            params: maSeance
           })
           .success(function(response) {

             console.log(maSeance)
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

             var mesRubriques = $scope.rubriques;

             angular.forEach(mesRubriques, function(maRubrique, key) {
                //console.log(maSeance.id)
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



      }

      // convertir date
      var convertHumanDateToMysqlDate = function(usDate) {
        var dateParts = usDate.split(/(\d{1,2})\-(\d{1,2})\-(\d{4})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }





});
