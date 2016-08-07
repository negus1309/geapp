app.controller('menuController', function($scope, $http, API_URL, $rootScope) {


  //*******************************************//
  // 01 ) INITIALISATION
  //*******************************************//

      /**
       * 1.1 Initialisation de l'horloge dans le menu avec moment.js
       *
       * @param aucun paramètre
       */
      function update() {
        $('#clock').html(moment().locale('fr').format('LLLL'));
      }
      setInterval(update, 1000);

      /**
       * 1.2 Initialisation du status de connexion
       *
       * @param aucun paramètre
       */
      checkNetworkStatus();



  //*******************************************//
  // 02 ) EVENEMENTS
  //*******************************************//

      /**
       * 2.1 Permet de retourner à la page d'accueil
       *
       * @param aucun paramètre
       */
      $scope.retourAccueil = function(){

            $('#liste').show();
            $('#workflow').hide();
            $('div#menu a').hide();
            $('div#menu a#recuperer-pv').show();
            $('#audio-panel').hide();
            $('#toggle-audio-icon').hide();

          }


  //*******************************************//
  // 03 ) FONCTIONS
  //*******************************************//

      /**
       * 3.1 Permet de vérifier l'état de la connexion Internet
       *
       * @param aucun paramètre
       */
       function checkNetworkStatus(){

         if(navigator.onLine){
           $('span#status-network').empty();
           $('span#status-network').append('<span id="status-online">online</span>')
         }else{
           $('span#status-network').empty();
           $('span#status-network').append('<span id="status-offline">offline</span>')
         }

         setInterval(function () {

           if(navigator.onLine){
             $('span#status-network').empty();
             $('span#status-network').append('<span id="status-online">online</span>')
           }else{
             $('span#status-network').empty();
             $('span#status-network').append('<span id="status-offline">offline</span>')
           }


         }, 500);
     }



     /**
      * 3.2 Permet configurer la librairie moment.js en français
      *
      * @param aucun paramètre
      */
     moment.locale( "fr", {
         months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
         monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
         weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
         weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
         weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
         longDateFormat : {
             LT : "HH:mm",
             L : "DD/MM/YYYY",
             LL : "D MMMM YYYY",
             LLL : "D MMMM YYYY LT",
             LLLL : "dddd D MMMM YYYY LT"
         },
         calendar : {
             sameDay: "[Aujourd'hui à] LT",
             nextDay: '[Demain à] LT',
             nextWeek: 'dddd [à] LT',
             lastDay: '[Hier à] LT',
             lastWeek: 'dddd [dernier à] LT',
             sameElse: 'L'
         },
         relativeTime : {
             future : "dans %s",
             past : "il y a %s",
             s : "quelques secondes",
             m : "une minute",
             mm : "%d minutes",
             h : "une heure",
             hh : "%d heures",
             d : "un jour",
             dd : "%d jours",
             M : "un mois",
             MM : "%d mois",
             y : "une année",
             yy : "%d années"
         },
         ordinal : function (number) {
             return number + (number === 1 ? 'er' : 'ème');
         },
         week : {
             dow : 1,
             doy : 4
         }
     });


});
