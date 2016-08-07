app.controller('gestionPresenceController', function($scope, $http, API_URL, $rootScope) {


  //*******************************************//
  // 01 ) EVENEMENTS
  //*******************************************//

  /**
   * 1.1 Ajoute un colonne d'heure supplémentaire
   *
   * @param aucun paramètre
   */
  $scope.addHourColumn = function(){

    var nbColumn = $('th.hour-header').length + 1;
    $('#gestion-presence-modal .header-row').append('<th class="hour-header">H'+nbColumn+'</th>');
    angular.forEach($rootScope.pv.deputes, function(depute, key) {
      depute.isPresentAtTimes.push(true)
    });
    if($rootScope.pv.deputesAdded){
      angular.forEach($rootScope.pv.deputesAdded, function(deputeAdded, key) {

        deputeAdded.isPresentAtTimes.push(true)
      });
    }

  }

  /**
   * 1.2 Ajoute une ligne pour un député supplémentaire
   *
   * @param aucun paramètre
   */
  $scope.addDepute = function(){

    if(!$rootScope.pv.deputesAdded){
      $rootScope.pv.deputesAdded = [];
    }
    $rootScope.pv.deputesAdded.push({"nom":"","prenom":"","titre":"","parti":"","fonction":"","isPresentAtTimes":[true]})
  }



});
