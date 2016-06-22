app.controller('accueilController', function($scope, $http, API_URL,createSeanceInfos,$rootScope,$filter) {

      // Accès aux commissions et les séances liées
    /*  $http.get(API_URL + "commissions/seances")
        .success(function(response) {
            $scope.commissions = response;

        });*/

        $rootScope.test = "salut";



      // EVENEMENTS



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
               //console.log(response)
               //console.log($idCommission)
               //console.log($nomCommission)

               createSeanceInfos.setProperty({'nomCommission':$nomCommission, 'idCommission':$idCommission, 'idSeance':response.id});
               //console.log('maprop'+createSeanceInfos.getProperty());




           });




      }




      $scope.editPv = function($idCommission,$nomCommission,$idSeance){

        $('#liste').hide();
        $('#workflow').show();
        $('div#menu a').show();

        //console.log($idSeance)

        $http({
          url: API_URL + "seance/"+$idSeance,
          method: "GET",
          params: {'commission_id': $idCommission}
         })
         .success(function(response) {
             //$scope.reponse = response;
             //console.log(response)
             //console.log($idCommission)
             //console.log($nomCommission)
             //console.log(response)
             var mesInvites = [];
             angular.forEach(response.assistance, function(assist, key) {

                mesInvites.push({'nom':assist.invite.nom,'prenom':assist.invite.prenom,'titre':assist.invite.titre, 'id':assist.invite.id});
              });
              //console.log(mesInvites)

              var dateMysql = response.date;
              var dateHuman = convertMysqlDateToHumanDate(dateMysql);
              //console.log(dateMysql)
              //console.log(dateHuman)


             createSeanceInfos.setProperty({
               'nomCommission':$nomCommission,
               'idCommission':$idCommission,
               'idSeance':$idSeance,
               'numero':response.numero,
               'invites':mesInvites,
               'date':dateHuman
             });


             //console.log(createSeanceInfos.getProperty())

             /*// get invite
             $http({
               url: API_URL +"seance/"+$idSeance+"/invite",
               method: "GET",
               params: {'seance_id': $idSeance}
              })
              .success(function(response) {
                console.log(response)

              });*/



         });

      }


      $scope.deletePv = function($idSeance){

        //console.log($idSeance)

        $http({
          url: API_URL + "seance/"+$idSeance+"/delete",
          method: "DELETE"
          //params: {'commission_id': $idCommission}
         })
         .success(function(response) {

           UIkit.notify({
               message : '<i class=\'uk-icon-check\'></i>&nbsp;PV supprimé!',
               status  : 'success',
               timeout : 3000,
               pos     : 'top-right'
           });


         });


      }

      var convertMysqlDateToHumanDate = function(usDate) {
        var dateParts = usDate.split(/(\d{4})\-(\d{1,2})\-(\d{1,2})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }



});
