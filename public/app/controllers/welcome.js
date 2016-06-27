app.controller('welcomeController', function($scope, $http, API_URL,$filter,$rootScope) {

  $scope.goToOnlineMode = function(){

    $('div#liste').show();
    $('div#welcome').hide();

  }


  $scope.goToOfflineMode = function(){
    $('div#draft').show();
    $('div#welcome').hide();

  }


});
