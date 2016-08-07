app.controller('workflowController', function($scope, $http, API_URL,$filter,$rootScope,$timeout) {


  //*******************************************//
  // 01 ) INITIALISATION
  //*******************************************//

      /**
       * 1.1 Initialisation du conteneur accordéon des éditeurs de contenu
       *
       * @param aucun paramètre
       */
       $(document).ready(function() {
           function close_accordion_section() {
               $('.accordion .accordion-section-title').removeClass('active');
               $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
           }

           $('#workflow').on('click', '.accordion-section-title' ,function(e) {
    
               var currentAttrValue = $(this).attr('href');

               if($(e.target).is('.active')) {
                   close_accordion_section();
               }else {
                   close_accordion_section();

                   // Titre de la rubrique active
                   $(this).addClass('active');
                   // Affiche le contenu du conteneur en question
                   $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
               }

               e.preventDefault();
           });
         });


      /**
       * 1.2 Initialisation de l'éditeur de contenu
       *
       * @param aucun paramètre
       */
        $scope.tinymceOptions = {
          menubar:false, // barre de menu masquée
          elementpath: false,
          statusbar: false,
          plugins:"autoresize",
          autoresize_max_height:"600px",
          setup: function (editor) {
              editor.addButton('ajoutdepute', { // ajoute la fonction d'ajout de député à la barre d'outils
                text: 'Insérer un député',
                icon: false,
                onclick: function () {
                  var modal = UIkit.modal("#insert-depute");
                  modal.show();
                }
              });
              editor.on("init", function(editor) {

              });
              editor.addShortcut('alt+d', 'Insertion depute', function(){
                var modal = UIkit.modal("#insert-depute");
                modal.toggle();

              });
              var deputes = $rootScope.pv.deputes;
              angular.forEach(deputes, function(depute, key) {
                keyNumber = key+1;
                var shortcut = "alt+"+keyNumber+"";
                editor.addShortcut(shortcut, 'Insertion ', function(){
                  $scope.insertDepute(depute);
                });
              });
          },
          // choix des éléments apparaissant dans la barre d'outils
          toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | cut copy paste | ajoutdepute'

        };




  //*******************************************//
  // 02 ) EVENEMENTS
  //*******************************************//

      /**
       * 2.1 Insère le nom et le titre du député dans l'éditeur de contenu actif
       *
       * @param depute Deputé dont le nom doit être inséré
       */
      $scope.insertDepute = function(depute){
        var titre;

        // Cas particulier si le député est le président
        if(depute.fonction == "president"){
          titre = "Le PRÉSIDENT ";
          tinymce.activeEditor.execCommand('mceInsertContent', false, titre );

        }else{
          // Pour tous les autres députés
          var nom = depute.nom.toUpperCase();
          if(depute.titre == "m"){
            titre = "M."
          }else{
            titre = "Mme"
          }
          tinymce.activeEditor.execCommand('mceInsertContent', false, titre+" "+nom+" " );
        }

        var modal = UIkit.modal("#insert-depute");
        modal.hide();

      }


      /**
       * 2.2 Permet de récupérer les informations sur le président de la commission
       *
       * @param aucun paramètre
       */
        $rootScope.updatePresident = function(){
          $rootScope.deputes = JSON.parse(localStorage.getItem('deputes'));
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

      /**
       * 2.3 Permet de récupérer les informations sur les députés de la commission
       *
       * @param aucun paramètre
       */
        $rootScope.updateDeputes = function(){
          $rootScope.deputes = JSON.parse(localStorage.getItem('deputes'));
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

        /**
         * 2.4 Permet de récupérer le numéro du dernier PV et de l'incrémenter
         *
         * @param aucun paramètre
         */
        $rootScope.updateNumero = function(){
          $rootScope.pv.numero = $rootScope.pv.commission.lastPv + 1;

        }


      /**
       * 2.5 Permet d'ajouter des champs pour renseigner les informations sur un éventuel invité
       *
       * @param aucun paramètre
       */
        $scope.ajouterInvite = function(){
          if(!$scope.pv.invites){
            $scope.pv.invites = [];
          }
          $scope.pv.invites.push({'nom':'','prenom':'','titre':''});
        }


      /**
       * 2.6 Permet de supprimer un éventuel invité
       *
       * @param aucun paramètre
       */
         $scope.supprimerInvite = function($index, $seance_id, $invite_id){

           $scope.pv.invites.splice($index,1);

         }

       /**
        * 2.7 Permet d'ajouter un point d'ODJ
        *
        * @param aucun paramètre
        */
          $scope.ajouterPointODJ = function(){
            if(!$scope.pv.rubriques){
              $scope.pv.rubriques = [];
            }
            $scope.pv.rubriques.push({'titre':'','contenu':'','heure_debut':'','heure_fin':''});
          }


        /**
         * 2.8 Permet de supprimer un point d'ODJ (rubrique)
         *
         * @param $index Index du point d'ODJ à supprimer
         */
           $scope.supprimerRubrique = function($index){
              $scope.pv.rubriques.splice($index,1);
            }

        /**
         * 2.9 Permet d'ajouter un rapporteur au point d'ODJ
         *
         * @param $index Index du point d'ODJ à supprimer
         */
          $scope.ajouterRapporteur = function($index){
              if(!$scope.pv.rubriques[$index].rapporteurs){
                $scope.pv.rubriques[$index].rapporteurs = [];
              }
              $scope.pv.rubriques[$index].rapporteurs.push({})

          }

        /**
         * 2.10 Permet de supprimer un rapporteur au point d'ODJ
         *
         * @param $index Index du point d'ODJ à supprimer
         */
        $scope.supprimerRapporteur = function($rapporteurPosition, $noRubrique){
          $scope.pv.rubriques[$noRubrique].rapporteurs.splice($rapporteurPosition,1);

        }



        /**
         * 2.11 Permet de sauvegarder la séance dans en local et sur le serveur si Internet est disponible
         *
         * @param aucun paramètre
         */
        $rootScope.sauvegarderSeance = function(){

            // Notes : intégrer les promises

            // A. sauvegarde locale
            var tousMesPv = JSON.parse(localStorage.getItem('mesPv')) || []; // récupération des PV dans le local Storage
            var monNouveauPv = $scope.pv; // récupération du PV en cours de traitement

            angular.forEach(tousMesPv, function(unPv, key) {

              if(unPv.token == monNouveauPv.token){
                tousMesPv.splice(key,1)
              }

            });
            tousMesPv.push(monNouveauPv);
            localStorage.setItem('mesPv', JSON.stringify(tousMesPv));

            // notification de sauvegarde réussie
            UIkit.notify({
                message : '<i class=\'uk-icon-check\'></i>&nbsp;PV sauvegardé!',
                status  : 'success',
                timeout : 3000,
                pos     : 'top-center'
            });



            // B. sauvegarde serveur (si Internet est disponible, sauvegarde sur le serveur)
            if(navigator.onLine){
                var monNouveauPvStringify = JSON.stringify(monNouveauPv)
                // Sauvegarde du PV au format JSON pour la récupération
                $http({
                  url: API_URL + "pv/save",
                  method: "POST",
                  data: {'pv':monNouveauPvStringify,'token':monNouveauPv.token}
                }).success(function(response){

                });

                // Format des dates (à faire avec moment.js)
                var dateHuman = $scope.pv.date;
                if(dateHuman){
                  var dateToPost = convertHumanDateToMysqlDate(dateHuman);
                }else{
                  var dateToPost = null;
                }

                // Récupération des informations générales de la séance
                var maSeance = {
                  'token': $scope.pv.token, // token
                  'numero': $scope.pv.numero, // numero du PV
                  'date': dateToPost, // date de la séance modifiée
                  'heure_debut':$scope.pv.heure_debut, // heure de début de la séance
                  'heure_fin':$scope.pv.heure_fin, // heure de fin de la séance
                  'commission_id':$scope.pv.commission.id, // id de la commission concernée
                  'depute_id':$scope.pv.president.id // id du député qui préside la séance
                };

                // Sauvegarde au format relationnel
                $http({
                  url: API_URL + "seance/save",
                  method: "POST",
                  params: maSeance
                }).success(function(response){

                    var idSeance = response.id;
                    // Suppression des rubriques existantes (soft delete à mettre en place)
                    $http({
                      url: API_URL + "rubriques/delete",
                      method: "DELETE",
                      params: {'seance_id':idSeance}
                     })
                     .success(function(response) {


                        var mesRubriques = $scope.pv.rubriques;

                        angular.forEach(mesRubriques, function(maRubrique, key) {

                              maRubrique.seance_id = idSeance;
                              var numeroToPost = key + 1;
                              maRubrique.numero = numeroToPost;

                              // Sauvegarde des rubriques (corps du PV)
                              $http({
                                url: API_URL + "rubrique/create",
                                method: "POST",
                                params: maRubrique
                               })
                               .success(function(response) {

                               });

                        });

                      });

                      var mesInvites = $scope.pv.invites;

                      angular.forEach(mesInvites, function(monInvite, key) {

                            // Création des invités de la séance
                            $http({
                              url: API_URL + "invite/create",
                              method: "POST",
                              params: monInvite
                             })
                             .success(function(response) {

                                 var idInvite = response.id;

                                 // Création des assistances
                                 $http({
                                   url: API_URL + "assistance/create",
                                   method: "POST",
                                   params: {'seance_id':idSeance,'invite_id':idInvite}
                                  })
                                  .success(function(response) {

                                  });

                             });

                      });


                      var mesDeputes = $scope.pv.deputes;

                      // Suppression des présences existantes
                      $http({
                        url: API_URL + "presence/delete",
                        method: "DELETE",
                        params: {'seance_id':idSeance}
                       })
                       .success(function(response) {

                            // Suppression des absences existantes
                            $http({
                                url: API_URL + "absence/delete",
                                method: "DELETE",
                                params: {'seance_id':idSeance}
                            })
                            .success(function(response) {
                                angular.forEach(mesDeputes, function(monDepute, key) {
                                    angular.forEach(monDepute.isPresentAtTimes, function(isPresentAtTime, key) {

                                        var idDepute = monDepute.id;
                                        var heure = key+1;
                                        if(isPresentAtTime == true){

                                            // Sauvegarde des présences
                                            $http({
                                                url: API_URL + "presence/create",
                                                method: "POST",
                                                params: {'seance_id':idSeance,'depute_id':idDepute, 'heure':heure}
                                            })
                                            .success(function(response) {

                                            });

                                        }else{

                                            // Sauvegarde des absences
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

            })
          }

        }



  //*******************************************//
  // 03 ) FONCTIONS
  //*******************************************//

        /**
         * 3.1 Permet de convertir une date de type JJ-MM-AAAA en AAAA-MM-JJ
         *
         * @param usDate Date au format JJ-MM-AAAA
         */
        var convertHumanDateToMysqlDate = function(usDate) {
          var dateParts = usDate.split(/(\d{1,2})\-(\d{1,2})\-(\d{4})/);
          return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
        }



});
