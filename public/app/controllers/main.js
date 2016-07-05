app.controller('mainController', function($scope, $http, API_URL, $rootScope) {



        // synch commissions + deputes
        if(navigator.onLine){
          $.getJSON( "../app/data/commissions.json", function( data ) {
            //console.log(data)
            localStorage.setItem('commissions', JSON.stringify(data));
          });
          $.getJSON( "../app/data/deputes.json", function( data ) {
            //console.log(data)
            localStorage.setItem('deputes', JSON.stringify(data));
          });
        }



        //$rootScope.general=
        if(localStorage.getItem('mesPv')){

          var mesPv = JSON.parse(localStorage.getItem('mesPv'));
          //console.log(mesPv)

          $rootScope.mesPv = mesPv;
        }else{
          var mesPv = [{}];
          localStorage.setItem('mesPv', JSON.stringify(mesPv));

        }


        // SERVICE WORKER
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('../../js/service-worker.js', {})
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
        // EVENEMENTS
        //*******************************************//

      $rootScope.refreshSeance = function(){

        var mesPv = JSON.parse(localStorage.getItem('mesPv'));
        //console.log(mesPv)

        $rootScope.mesPv = mesPv;

        //console.log('dsjhfjfd')
        // Accès aux commissions et les séances liées
        /*$http.get(API_URL + "commissions/seances")
          .success(function(response) {
              $scope.commissions = response;

          });
        $http.get(API_URL + "commissions/seance/last")
          .success(function(response) {
              $scope.commissionsLast = response;

          });*/



      }

      //$scope.refreshSeance();

      $scope.toggleAudio = function(){

        $('#audio-panel').toggle();
      }








});
