app.controller('accueilController', function($scope, $http, API_URL,$rootScope,$filter) {

//*******************************************//
// 01 ) INITIALISATION
//*******************************************//

  /**
   * 1.1 Initialisation du calendrier en avec jQuery
   *
   * @param aucun paramètre
   */
  $(document).ready(function() {
      $('#calendar').fullCalendar({
          lang:"fr", // choix de la langue
          height:'auto' // hauteur automatique
      })
  });

  /**
   * 1.2 Initialisation du module de notes
   *
   * @param aucun paramètre
   */
  $scope.tinymceOptionsNotes = {
    menubar:false,
    toolbar:false,
    elementpath: false,
    statusbar: false
  }

//*******************************************//
// 02 ) EVENEMENTS
//*******************************************//

/**
 * 2.1 Création d'un nouveau PV
 *
 * @param aucun paramètre
 */
 $scope.nouveauPv = function(){

        var pvCount = $rootScope.mesPv.length;

        if(pvCount < 3){
          $rootScope.pv = {}
          var pvToken = token();
          $rootScope.pv.token = pvToken;
          $rootScope.pv.commission = {};
          $rootScope.other = {};
          $rootScope.other.commissions = JSON.parse(localStorage.getItem('commissions'));
          var modal = UIkit.modal("#choix-commission-modal");
          modal.show();

        }else{
          UIkit.modal.alert("<h2>Attention!</h2><p class='uk-alert uk-alert-warning'>Le quota de 3 PV est atteint, veuillez mettre un PV à la corbeille ou le supprimer définitivement pour faire de la place.</p>");
        }

  }

  /**
   * 2.2 Initialisation d'un nouveau PV
   *
   * @param aucun paramètre
   */
  $scope.initPv = function(){

          var modal = UIkit.modal("#choix-commission-modal");
          modal.hide();
          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();
          $('div#menu a#recuperer-pv').hide();
          $('a#toggle-audio-icon').show();

          $rootScope.updateDeputes();
          $rootScope.updatePresident();
          $rootScope.updateNumero();

  }

  /**
   * 2.3 Convertir le PV au format Word
   *
   * @param pvToken Token du PV à convertir
   */
  $scope.convertPv = function($pvToken){

    // Récupération du PV à convertir à l'aide du token
    var mesPv = $rootScope.mesPv;
    angular.forEach(mesPv, function(monPv, key) {
        if(monPv.token == $pvToken){
          $rootScope.pv = monPv;
        }
    });

    var pvNumero = $rootScope.pv.numero; // numéro du PV
    var pvCommission = $rootScope.pv.commission.nom; // nom de la commission

    var pvDate = $rootScope.pv.date; // date du PV
    var pvDateMoment = moment(pvDate, "DD-MM-YYYY"); // date du PV parsée avec moment.js
      var pvJourNom = pvDateMoment.format('dddd'); // nom du jour de la semaine (string)
      var pvJourNum = pvDateMoment.date(); // jour du mois (number)
      var pvMois = pvDateMoment.format('MMMM'); // nom du moins (string)
      var pvAnnee = pvDateMoment.format('YYYY'); // année

    var pvHeureDebut = $rootScope.pv.heure_debut; // heure de début de la séance
    var pvHeureFin = $rootScope.pv.heure_fin; // heure de fin de la séance
      var pvHeureDebutMoment = moment(pvHeureDebut, "hh:mm"); // heure de début de la séance parsée avec moment.js
      var pvHeureFinMoment = moment(pvHeureFin, "hh:mm"); // heure de fin de la séance parsée avec moment.js

    var pvPresident = $rootScope.pv.president; // président de la séance
    var pvDeputes = $rootScope.pv.deputes; // députés de la commission qui participe à la séance

        // Traitement de la page de présentation
        $('#word-document').append('<h1>PROCÈS-VERBAL</h1><br/>');
        $('#word-document').append('<h1>COMMISSION '+pvCommission.toUpperCase()+'</h1><br/>');
        $('#word-document').append('<p>Séance du '+pvJourNom+' '+pvJourNum+' '+pvMois+' '+pvAnnee+' de '
        +pvHeureDebutMoment.format('hh')+'h'+pvHeureDebutMoment.format('mm')+' à '+pvHeureFinMoment.format('hh')+'h'+pvHeureFinMoment.format('mm')+'</p>');

        $('#word-document').append('<table class="w-table"></table>');

          // Presidence
          $('.w-table').append('<tr class="w-president"></tr>');
            $('.w-president').append('<td>Présidence:</td>');
            $('.w-president').append('<td>'+pvPresident.nom+'</td>');

          // Membres, présence
          $('.w-table').append('<tr class="w-membres"></tr>');
            $('.w-membres').append('<td valign="top">Membres (présents):</td>');
            $('.w-membres').append('<td class="w-deputes-liste"></td>');
              angular.forEach(pvDeputes, function(depute, key) {
                $('.w-deputes-liste').append('<p>'+depute.titre+' '+depute.nom+'</p>');
              });

          // Excusés
          $('.w-table').append('<tr class="w-excuses"></tr>');
            $('.w-excuses').append('<td valign="top">Excusés:</td>');
            $('.w-excuses').append('<td></td>');


        // Traitement de l'ODJ
        var pvRubriques = $rootScope.pv.rubriques;

        $('#word-document').append('<h1>Ordre du jour</h1><ol class="w-odj"></ol>');
          angular.forEach(pvRubriques, function(rubrique, key) {
            $('.w-odj').append('<li>'+rubrique.titre+'</li>');
          });

        // Traitement des points d'ODJ (corps de PV)
        $('#word-document').append('<div id="w-rubriques"></div>');
          angular.forEach(pvRubriques, function(rubrique, key) {
            var numero = key +1;
            $('#w-rubriques').append('<h3>'+numero+') '+rubrique.titre+'</h3>');
            $('#w-rubriques').append(rubrique.contenu);
          });

        // Générer fichier Word
        $('#word-document').wordExport('PV-'+pvCommission+'-'+pvNumero);

  }


  /**
   * 2.4 Edition du PV (flux d'édition)
   *
   * @param pvToken Token du PV à éditer
   */
  $scope.editPv = function($pvToken){

    $('#liste').hide();
    $('#workflow').show();
    $('div#menu a').show();
    $('div#menu a#recuperer-pv').hide();
    $('a#toggle-audio-icon').show();

    var mesPv = $rootScope.mesPv;
    angular.forEach(mesPv, function(monPv, key) {
        if(monPv.token == $pvToken){
          $rootScope.pv = monPv;
        }
    });
  }



  /**
   * 2.5 Soumission du PV
   *
   * @param pvToken Token du PV à soumettre
   */
  $scope.soumettrePv = function($pvToken){

          var mesPv = $rootScope.mesPv;
          angular.forEach(mesPv, function(monPv, key) {
              if(monPv.token == $pvToken){
                $rootScope.pv = monPv;
                if(navigator.onLine){
                  $rootScope.sauvegarderSeance();
                  // notification si réussi
                  UIkit.notify({
                      message : '<i class=\'uk-icon-check\'></i>&nbsp;PV soumis!',
                      status  : 'success',
                      timeout : 3000,
                      pos     : 'top-center'
                  });

                }else{
                  // notification si échoué
                  UIkit.notify({
                      message : '<i class=\'uk-icon-close\'></i>&nbsp;Il faut être connecté à Internet.',
                      status  : 'danger',
                      timeout : 3000,
                      pos     : 'top-center'
                  });
                }

              }

          });

  }


  /**
   * 2.6 Suppression d'un PV
   *
   * @param $index Index du PV à supprimer
   */
  $scope.deletePv = function($index){

        UIkit.modal.confirm("Êtes-vous sûr de vouloir supprimer ce PV définitivement?", function(){

            $rootScope.mesPvCorbeille.splice($index,1)
            var mesPvCorbeille = $rootScope.mesPvCorbeille;
            localStorage.setItem('mesPvCorbeille', JSON.stringify(mesPvCorbeille));
            $rootScope.$apply();

            // notification si PV supprimé
            UIkit.notify({
                message : '<i class=\'uk-icon-check\'></i>&nbsp;PV supprimé!',
                status  : 'success',
                timeout : 3000,
                pos     : 'top-center'
            });


        });

      }

  /**
   * 2.7 Mise à la corbeille d'un PV
   *
   * @param $index Index du PV à supprimer
   */
  $scope.moveToTrash = function($index){

        if($rootScope.mesPvCorbeille.length < 3){
          var mesPvCorbeille = $rootScope.mesPvCorbeille;
          var mesPv = $rootScope.mesPv;

          var myPvToMove = $rootScope.mesPv.splice($index,1)[0]

          mesPvCorbeille.push(myPvToMove);
          localStorage.setItem('mesPvCorbeille', JSON.stringify(mesPvCorbeille));
          localStorage.setItem('mesPv', JSON.stringify(mesPv));
        }else{
          UIkit.modal.alert("<h2>Attention!</h2><p class='uk-alert uk-alert-warning'>Le quota de 3 PV dans la corbeille est atteint, veuillez supprimer définitivement un PV pour faire de la place.</p>");

        }

  }

  /**
   * 2.8 Déplacement du PV de la corbeille vers la liste de PV en traitement
   *
   * @param $index Index du PV à déplacer
   */
  $scope.moveToPv = function($index){

        if($rootScope.mesPv.length < 3){
          var mesPvCorbeille = $rootScope.mesPvCorbeille;
          var mesPv = $rootScope.mesPv;

          var myPvToMove = $rootScope.mesPvCorbeille.splice($index,1)[0]

          mesPv.push(myPvToMove);
          localStorage.setItem('mesPv', JSON.stringify(mesPv));
          localStorage.setItem('mesPvCorbeille', JSON.stringify(mesPvCorbeille));

        }else{
          UIkit.modal.alert("<h2>Attention!</h2><p class='uk-alert uk-alert-warning'>Le quota de 3 PV est atteint, veuillez mettre un PV à la corbeille ou le supprimer définitivement pour faire de la place.</p>");

        }

    }

  //*******************************************//
  // 03 ) FONCTIONS
  //*******************************************//

      /**
       * 3.1 Permet de convertir une date de type AAAA-MM-JJ en JJ-MM-AAAA
       *
       * @param usDate Date de type AAAA-MM-JJ
       */
      var convertMysqlDateToHumanDate = function(usDate) {
        var dateParts = usDate.split(/(\d{4})\-(\d{1,2})\-(\d{1,2})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }

      /**
       * 3.2 Permet de générer un token lors de la création d'un nouveau PV
       *
       * @param aucun paramètre
       */
      var rand = function() {
          return Math.random().toString(36).substr(2); // génère un token
      };
      var token = function() {
          return rand() + rand(); // pour le rendre plus long
      };





});
