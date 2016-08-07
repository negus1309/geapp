app.controller('recuperationPvController', function($scope, $http, API_URL, $rootScope) {


  //*******************************************//
  // 01 ) EVENEMENTS
  //*******************************************//

  /**
   * 1.1 Récupération des PV stockés sur le serveur
   *
   * @param aucun paramètre
   */
  $rootScope.getPvRecuperes = function(){

    // Récupération des PV de l'utilisateur sauvegardés sur le serveur
    $http({
      url: API_URL + "pvs",
      method: "GET"
    }).success(function(response){
      var mesPvRecuperes = [];
      angular.forEach(response, function(pvRecupere, key) {
        var pvObject = JSON.parse(pvRecupere.pv);
        mesPvRecuperes.push(pvObject);
      });
      $scope.mesPvRecuperes = mesPvRecuperes;
    });

  }

  $scope.getPvRecuperes();





});
