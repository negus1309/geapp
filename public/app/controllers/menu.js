app.controller('menuController', function($scope, $http, API_URL, $rootScope) {



    checkNetworkStatus();



      // EVENEMENTS

      $scope.retourAccueil = function(){

        $('#liste').show();
        $('#workflow').hide();
        $('div#menu a').hide();

      }

      $scope.getDraftInfos = function(){
        UIkit.modal.confirm("Êtes-vous sûr? Cela va écraser les données saisies.", function(){
            // will be executed on confirm.
            $rootScope.general=JSON.parse(localStorage.getItem('seance'));
            console.log($rootScope.general)
            $rootScope.general.invites=JSON.parse(localStorage.getItem('invites'));
            $rootScope.rubriques=JSON.parse(localStorage.getItem('rubriques'));

            //$rootScope.general.nomCommission =
            /*
            'id':$scope.general.idSeance,
            'commission_id':$scope.general.idCommission*/





            $rootScope.$apply()
          //  $apply();

        });
      }


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









});
