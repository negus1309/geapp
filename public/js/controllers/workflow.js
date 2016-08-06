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
               // Grab current anchor value
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
                  //editor.insertContent('salut');
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
            pos     : 'top-center'
        });





      //  var isOnline = false;

        if(navigator.onLine){

          var monNouveauPvStringify = JSON.stringify(monNouveauPv)
          console.log(monNouveauPvStringify)
          $http({
            url: API_URL + "pv/save",
            method: "POST",
            data: {'pv':monNouveauPvStringify,'token':monNouveauPv.token}
          }).success(function(response){

            console.log(response)
          });

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
          //console.log(maSeance)

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
                                  //console.log(monDepute)
                                    angular.forEach(monDepute.isPresentAtTimes, function(isPresentAtTime, key) {
                                      var idDepute = monDepute.id;
                                      //var idSeance =
                                      //console.log(isPresentAtTime)
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
