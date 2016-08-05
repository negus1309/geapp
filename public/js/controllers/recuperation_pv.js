app.controller('recuperationPvController', function($scope, $http, API_URL, $rootScope) {


  //*******************************************//
  // 01 ) EVENEMENTS
  //*******************************************//

  /**
   * 1.1
   *
   * @param aucun paramètre
   */
  $scope.getPvRecuperes = function(){

    $http({
      url: API_URL + "pvs",
      method: "GET"
    }).success(function(response){
      console.log(response)
      var mesPvRecuperes = [];
      angular.forEach(response, function(pvRecupere, key) {

        var pvObject = JSON.parse(pvRecupere.pv);
        mesPvRecuperes.push(pvObject);
        //console.log(pv)

      });
      console.log(mesPvRecuperes)
      $scope.mesPvRecuperes = mesPvRecuperes;



    });


  }
  $scope.getPvRecuperes();





});
