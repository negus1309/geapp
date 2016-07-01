app.controller('menuController', function($scope, $http, API_URL, $rootScope) {


  //$('#clock').fitText(1.3);

  function update() {
    $('#clock').html(moment().locale('fr').format('LLLL'));


  }

  setInterval(update, 1000);


    checkNetworkStatus();



      // EVENEMENTS

      $scope.retourAccueil = function(){

        $('#liste').show();
        $('#workflow').hide();
        $('div#menu a').hide();

      }
/*
      $scope.getDraftInfos = function(){
        UIkit.modal.confirm("Êtes-vous sûr? Cela va écraser les données saisies.", function(){
            // will be executed on confirm.
            $rootScope.general=JSON.parse(localStorage.getItem('seance'));
            console.log($rootScope.general)
            $rootScope.general.invites=JSON.parse(localStorage.getItem('invites'));
            $rootScope.rubriques=JSON.parse(localStorage.getItem('rubriques'));




            $rootScope.$apply()
          //  $apply();

        });
      }
*/

      // FONCTIONS



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



     // FRENCH DATE HOUR
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
             dow : 1, // Monday is the first day of the week.
             doy : 4  // The week that contains Jan 4th is the first week of the year.
         }
     });






});
