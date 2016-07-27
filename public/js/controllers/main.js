app.controller('mainController', function($scope, $http, API_URL, $rootScope) {

  //*******************************************//
  // 01 ) INITIALISATION
  //*******************************************//

    /**
     * 1.1 Récupère les données des commissions et leur membres dans le local storage s'il y a Internet
     *
     * @param aucun paramètre
     */
    if(navigator.onLine){
      $.getJSON( "../js/data/commissions.json", function( data ) {
        //console.log(data)
        localStorage.setItem('commissions', JSON.stringify(data));
      });
      $.getJSON( "../js/data/deputes.json", function( data ) {
        //console.log(data)
        localStorage.setItem('deputes', JSON.stringify(data));
      });
    }

    /**
     * 1.2 Récupère les PV dans le scope depuis le local storage ou crée le espace de stockage la première fois
     *
     * @param aucun paramètre
     */
    if(localStorage.getItem('mesPv')){

      var mesPv = JSON.parse(localStorage.getItem('mesPv'));

      $rootScope.mesPv = mesPv;
    }else{
      var mesPv = [];
      localStorage.setItem('mesPv', JSON.stringify(mesPv));
      $rootScope.mesPv = mesPv;


    }

    /**
     * 1.3 Récupère les PV de la corbeille dans le scope depuis le local storage ou crée le espace de stockage la première fois
     *
     * @param aucun paramètre
     */
    if(localStorage.getItem('mesPvCorbeille')){

      var mesPvCorbeille = JSON.parse(localStorage.getItem('mesPvCorbeille'));

      $rootScope.mesPvCorbeille = mesPvCorbeille;
    }else{
      var mesPvCorbeille = [];
      localStorage.setItem('mesPvCorbeille', JSON.stringify(mesPvCorbeille));
      $rootScope.mesPvCorbeille = mesPvCorbeille;

    }

    /**
     * 1.4 Initialisation et enregistrement du SW (Service Worker) pour la mise en cache
     *
     * @param aucun paramètre
     */
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('../../js/sw/service-worker.js', {})
            .then(function (registration) {
                console.log(registration);
            })
            .catch(function (e) {
                console.error(e);
            })
    } else {
        console.log('Service Worker is not supported in this browser.')
    }



    //*******************************************//
    // 02 ) EVENEMENTS
    //*******************************************//

    /**
     * 2.1 Récupère les PV stocker dans le local storage
     *
     * @param aucun paramètre
     */
      $rootScope.refreshSeance = function(){

        var mesPv = JSON.parse(localStorage.getItem('mesPv'));

        $rootScope.mesPv = mesPv;

      }




      //$scope.refreshSeance();

      $scope.toggleAudio = function(){

        $('#audio-panel').toggle();
      }








});
