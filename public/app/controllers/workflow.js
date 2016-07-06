app.controller('workflowController', function($scope, $http, API_URL,$filter,$rootScope,$timeout) {


  //$scope.pv = {}
  //$scope.pv.commission = {}

  $scope.nomCommissions = JSON.parse(localStorage.getItem('commissions'));

  $rootScope.deputes = JSON.parse(localStorage.getItem('deputes'));






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


      //angular.element(document).find('#editor-0').froalaEditor();
      //$scope.$evalAsync(function() {  angular.element(document).find('#editor-0').froalaEditor();});
      //$timeout(function() { showEditors(); }, 2000, false);


        var showEditors =  function(){
          var nbRubriques = $rootScope.pv.rubriques.length;
          console.log(nbRubriques)
          for (var i=0; i<nbRubriques; i++) {
            //$("#editor-"+i).html('<p>hjhjhj</p>')
             $("#editor-"+i).froalaEditor();
           }
        }



        $scope.updatePresident = function(){
          console.log('tete')
          var mesCommissionsAvecMembres = $rootScope.deputes;

          angular.forEach(mesCommissionsAvecMembres, function(maCommissionAvecMembres, key) {
            if(maCommissionAvecMembres.id == $rootScope.pv.commission.id){
              angular.forEach(maCommissionAvecMembres.membres, function(membre, key) {
                if(membre.fonction =="president"){
                  console.log(membre)
                  $rootScope.pv.president = membre;

                }

              });

            }


          });
        }

        // a fair elors de la cretion, re init tout le temps is present
        $rootScope.updateDeputes = function(){
          var mesCommissionsAvecMembres = $rootScope.deputes;
          angular.forEach(mesCommissionsAvecMembres, function(maCommissionAvecMembres, key) {
            if(maCommissionAvecMembres.id == $rootScope.pv.commission.id){


                $rootScope.pv.deputes = maCommissionAvecMembres.membres;
                var mesDeputes = $rootScope.pv.deputes;

                angular.forEach(mesDeputes, function(monDepute, key) {

                    monDepute.isPresentAtTimes = [];
                    monDepute.isPresentAtTimes.push(true);

                });





            }


          });


        }


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

      $scope.ajouterRapporteur = function($noRubrique){
        console.log($noRubrique)
        if(!$scope.pv.rubriques[$noRubrique].rapporteurs){

          $scope.pv.rubriques[$noRubrique].rapporteurs = [];
        }
        $scope.pv.rubriques[$noRubrique].rapporteurs.push({})
        /*console.log('fd')
        if(!$scope.pv.invites){
          $scope.pv.invites = [];
        }
        $scope.pv.invites.push({'nom':'','prenom':'','titre':''});*/

      }

      $scope.supprimerRapporteur = function($rapporteurPosition, $noRubrique){
        //console.log($rapporteurPosition +" et "+$noRubrique)
        $scope.pv.rubriques[$noRubrique].rapporteurs.splice($rapporteurPosition,1);

      }




      $rootScope.sauvegarderSeance = function(){



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
            message : '<i class=\'uk-icon-check\'></i>&nbsp;PV sauvegardé!',
            status  : 'success',
            timeout : 3000,
            pos     : 'top-right'
        });





      //  var isOnline = false;

        if(navigator.onLine){

          //***************************************************//
          // Sauvegarde Seance
          //***************************************************//
          //var dateHuman =
          var dateHuman = $scope.pv.date;
          if(dateHuman){
            var dateToPost = convertHumanDateToMysqlDate(dateHuman);
          }else{
            var dateToPost = null;
          }

          //console.log(dateHuman)



          //console.log(dateToPost)
         //var dateToPost = reverse(dateHuman);
         //console.log(dateToPost)

          // infos séances
          var maSeance = {
            //'id':$scope.meta.idSeance,
            'token': $scope.pv.token,
            'numero': $scope.pv.numero,
            'date': dateToPost,
            'heure_debut':$scope.pv.heure_debut,
            'heure_fin':$scope.pv.heure_fin,
            'commission_id':$scope.pv.commission.id,
            'depute_id':$scope.pv.president.id
          };
          console.log(maSeance)

          $http({
            url: API_URL + "seance/save",
            method: "POST",
            params: maSeance
          }).success(function(response){
              //console.log(response)
              var idSeance = response.id;


                          //***************************************************//
                          // Sauvegarde Rubriques
                          //***************************************************//
                          $http({
                            url: API_URL + "rubriques/delete",
                            method: "DELETE",
                            params: {'seance_id':idSeance}
                           })
                           .success(function(response) {

                             //console.log(response)
                                      var mesRubriques = $scope.pv.rubriques;

                                      angular.forEach(mesRubriques, function(maRubrique, key) {
                                         //console.log(maSeance.id)
                                         maRubrique.seance_id = idSeance;
                                         var numeroToPost = key + 1;
                                         maRubrique.numero = numeroToPost;

                                         //console.log(maRubrique)

                                          $http({
                                            url: API_URL + "rubrique/create",
                                            method: "POST",
                                            params: maRubrique
                                           })
                                           .success(function(response) {

                                             //console.log(response)
                                           });

                                      });

                            });

                          //***************************************************//
                          // Sauvegarde Invités
                          //***************************************************//
                          var mesInvites = $scope.pv.invites;

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
                                       var idInvite = response.id;


                                       $http({
                                         url: API_URL + "assistance/create",
                                         method: "POST",
                                         params: {'seance_id':idSeance,'invite_id':idInvite}
                                        })
                                        .success(function(response) {

                                           //console.log(response)


                                        });

                             });

                          });

                          //***************************************************//
                          // Sauvegarde Présence / Absence
                          //***************************************************//
                          var mesDeputes = $scope.pv.deputes;

                          $http({
                            url: API_URL + "presence/delete",
                            method: "DELETE",
                            params: {'seance_id':idSeance}
                           })
                           .success(function(response) {

                             $http({
                               url: API_URL + "absence/delete",
                               method: "DELETE",
                               params: {'seance_id':idSeance}
                              })
                              .success(function(response) {
                                angular.forEach(mesDeputes, function(monDepute, key) {
                                  console.log(monDepute)
                                    angular.forEach(monDepute.isPresentAtTimes, function(isPresentAtTime, key) {
                                      var idDepute = monDepute.id;
                                      //var idSeance =
                                      console.log(isPresentAtTime)
                                      var heure = key+1;
                                      if(isPresentAtTime == true){

                                        $http({
                                          url: API_URL + "presence/create",
                                          method: "POST",
                                          params: {'seance_id':idSeance,'depute_id':idDepute, 'heure':heure}
                                         })
                                         .success(function(response) {


                                         });

                                      }else{

                                        $http({
                                          url: API_URL + "absence/create",
                                          method: "POST",
                                          params: {'seance_id':idSeance,'depute_id':idDepute, 'heure':heure}
                                         })
                                         .success(function(response) {


                                         });
                                      }


                                    });


                                });

                              });

                           });






          }) // fin save Seance success

        } // fin si online



      }// fin scope save

      // convertir date
      var convertHumanDateToMysqlDate = function(usDate) {
        var dateParts = usDate.split(/(\d{1,2})\-(\d{1,2})\-(\d{4})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }





});
