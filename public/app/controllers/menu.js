app.controller('menuController', function($scope, $http, API_URL) {



    checkNetworkStatus();



      // EVENEMENTS

      $scope.retourAccueil = function(){

        $('#liste').show();
        $('#workflow').hide();
        $('div#menu a').hide();

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
