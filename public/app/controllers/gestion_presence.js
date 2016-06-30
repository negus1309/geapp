app.controller('gestionPresenceController', function($scope, $http, API_URL, $rootScope) {



  $rootScope.getDeputes = function($idCommission){

/*
    $http.get(API_URL + "commissions/"+$idCommission+"/deputes")
      .success(function(response) {
          $scope.deputes = response;

      });*/

      console.log($idCommission)
      var mesCommissionsAvecMembres = JSON.parse(localStorage.getItem('deputes'));

      angular.forEach(mesCommissionsAvecMembres, function(maCommissionAvecMembres, key) {

        if(maCommissionAvecMembres.id == $idCommission){
          $rootScope.deputes = maCommissionAvecMembres.membres;
        }

      });




  }

  $scope.addHourColumn = function(){

    var nbColumn = $('th.hour-header').length + 1;
    //console.log(nbColumn)
    $('#header-row').append('<th class="hour-header">H'+nbColumn+'</th>');
    $('.normal-row').append('<td class="hour-cell"><input type="checkbox" checked></td>');

  }




});
