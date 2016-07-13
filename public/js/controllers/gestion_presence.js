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

      //console.log($idCommission)
    //  console.log(!$rootScope.pv.deputes.isPresentAtTimes)
      /*if(!$rootScope.pv.deputes[0].isPresentAtTimes.length){

        angular.forEach($rootScope.pv.deputes, function(depute, key) {

          //depute.isPresentAtTimes = [];
          depute.


        });


      }*/





  }

  $scope.addHourColumn = function(){

    var nbColumn = $('th.hour-header').length + 1;
    $('#gestion-presence-modal .header-row').append('<th class="hour-header">H'+nbColumn+'</th>');
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
