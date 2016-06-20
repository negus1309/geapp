app.controller('accueilController', function($scope, $http, API_URL,createSeanceInfos) {

      // Accès aux commissions et les séances liées
    /*  $http.get(API_URL + "commissions/seances")
        .success(function(response) {
            $scope.commissions = response;

        });*/





      // EVENEMENTS

      $scope.editPv = function($idCommission,$nomCommission,$idSeance){

        $('#liste').hide();
        $('#workflow').show();
        $('div#menu a').show();

        console.log($idSeance)
        //var idSeance =

        $http({
          url: API_URL + "seance/"+$idSeance,
          method: "GET",
          params: {'commission_id': $idCommission}
         })
         .success(function(response) {
             //$scope.reponse = response;
             console.log(response)
             //console.log($idCommission)
             //console.log($nomCommission)

             createSeanceInfos.setProperty({
               'nomCommission':$nomCommission,
               'idCommission':$idCommission,
               'idSeance':$idSeance,
               'numero':response.numero
             });
             //console.log('maprop'+createSeanceInfos.getProperty());




         });

      }

      $scope.convertPv = function(){

      }

      $scope.nouveauPV = function($idCommission,$nomCommission){

          //console.log($idCommission)
          //console.log($nomCommission)

          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();

          $http({
            url: API_URL + "seance/create",
            method: "POST",
            params: {'commission_id': $idCommission}
           })
           .success(function(response) {
               //$scope.reponse = response;
               console.log(response)
               //console.log($idCommission)
               //console.log($nomCommission)

               createSeanceInfos.setProperty({'nomCommission':$nomCommission, 'idCommission':$idCommission, 'idSeance':response.id});
               //console.log('maprop'+createSeanceInfos.getProperty());




           });




      }








});
