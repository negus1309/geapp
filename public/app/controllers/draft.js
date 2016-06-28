app.controller('draftController', function($scope, $http, API_URL,$filter,$rootScope) {


  // Jquery accordion
  $(document).ready(function() {
      function close_accordion_section() {
          $('.accordion .accordion-section-title').removeClass('active');
          $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
      }

      $('#draft').on('click', '.accordion-section-title' ,function(e) {

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

      $scope.general = {}
      $scope.general.invites = [];
      $scope.rubriques = [];
      //*******************************************//
      // EVENEMENTS
      //*******************************************//

      // Ajout de champ invités
      $scope.ajouterInvite = function(){



        $scope.general.invites.push({'nom':'','prenom':'','titre':''});
      }



      // Suppression de champ invité
      $scope.supprimerInvite = function($index, $seance_id, $invite_id){

        $scope.general.invites.splice($index,1);


      }

      // Ajout de champ invités
      $scope.ajouterPointODJ = function(){

        $scope.rubriques.push({'titre':'','contenu':'','heure_debut':'','heure_fin':''});
      }
      // Suppression de champ invité
      $scope.supprimerRubrique = function($index, $seance_id, $rubrique_id){

        $scope.rubriques.splice($index,1);

      }

      $scope.sauvegarderSeance = function(){


        //var dateHuman =
        //var dateHuman = $scope.general.date;
        //console.log(dateHuman)
        //var dateToPost = convertHumanDateToMysqlDate(dateHuman);


       //var dateToPost = reverse(dateHuman);
       //console.log(dateToPost)

        // infos séances
        var maSeance = {
          //'id':$scope.general.idSeance,
          'numero': $scope.general.numero,
          'date': $scope.general.date,
          'heure_debut':$scope.general.heure_debut,
          'heure_fin':$scope.general.heure_fin,
          //'commission_id':$scope.general.idCommission,
          'president_id':1

        };
        // store general infos
        localStorage.setItem('seance', JSON.stringify(maSeance));






           //console.log(maSeance)
         // infos invites
         var mesInvites = $scope.general.invites;
         localStorage.setItem('invites', JSON.stringify(mesInvites));





             //console.log(monInvite)


           var mesRubriques = $scope.rubriques;

           angular.forEach(mesRubriques, function(maRubrique, key) {
              //console.log(maSeance.id)
              //maRubrique.seance_id = maSeance.id;
              var numeroToPost = key + 1;
              maRubrique.numero = numeroToPost;
           });
          localStorage.setItem('rubriques', JSON.stringify(mesRubriques));





           UIkit.notify({
               message : '<i class=\'uk-icon-check\'></i>&nbsp;PV brouillon sauvegardé!',
               status  : 'success',
               timeout : 3000,
               pos     : 'top-right'
           });

           //console.log(response)







      }

      // convertir date
      var convertHumanDateToMysqlDate = function(usDate) {
        var dateParts = usDate.split(/(\d{1,2})\-(\d{1,2})\-(\d{4})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }















});
