app.controller('gestionPresenceController', function($scope, $http, API_URL, $rootScope) {

  $scope.showPv = function(){
    console.log($rootScope.pv)
  }

  $rootScope.getDeputes = function($idCommission){

/*
    $http.get(API_URL + "commissions/"+$idCommission+"/deputes")
      .success(function(response) {
          $scope.deputes = response;

      });*/

      console.log($idCommission)
      if(!$rootScope.pv.deputes){

        //var mesCommissionsAvecMembres = JSON.parse(localStorage.getItem('deputes'));
        var mesCommissionsAvecMembres = $rootScope.deputes;//JSON.parse(localStorage.getItem('deputes'));

        angular.forEach(mesCommissionsAvecMembres, function(maCommissionAvecMembres, key) {

          if(maCommissionAvecMembres.id == $idCommission){
            $rootScope.pv.deputes = maCommissionAvecMembres.membres;

          }

        });


        angular.forEach($rootScope.pv.deputes, function(depute, key) {

          depute.isPresentAtTimes = [];
          depute.isPresentAtTimes.push(true)

          /*if(!$rootScope.pv.deputes){
            $rootScope.pv.depute

          }*/

        });


      }





  }

  $scope.addHourColumn = function(){

    var nbColumn = $('th.hour-header').length + 1;
    $('#header-row').append('<th class="hour-header">H'+nbColumn+'</th>');
    //console.log(nbColumn)
    angular.forEach($rootScope.pv.deputes, function(depute, key) {

      depute.isPresentAtTimes.push(true)
    });
    if($rootScope.pv.deputesAdded){
      angular.forEach($rootScope.pv.deputesAdded, function(deputeAdded, key) {

        deputeAdded.isPresentAtTimes.push(true)
      });
    }



  }
  $scope.addDepute = function(){

    if(!$rootScope.pv.deputesAdded){
      $rootScope.pv.deputesAdded = [];
    }
    $rootScope.pv.deputesAdded.push({"nom":"","prenom":"","titre":"","parti":"","fonction":"","isPresentAtTimes":[true]})
    //$rootScope.$apply()
    console.log($rootScope.pv.deputesAdded)
  }



});
