app.controller('accueilController', function($scope, $http, API_URL,$rootScope,$filter) {



      //*******************************************//
      // EVENEMENTS
      //*******************************************//


      $scope.convertPv = function(){

      }

      $scope.nouveauPV = function($idCommission,$nomCommission){

          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();

          $http({
            url: API_URL + "seance/create",
            method: "POST",
            params: {'commission_id': $idCommission}
           })
           .success(function(response) {

               //console.log($nomCommission)
               // Date actuelle pour le placeholder du formulaire
               var currentDate = new Date();

               var currentDateHuman = $filter('date')(currentDate, 'dd-MM-yyyy')


                 //$scope.general.date = currentDateHuman;

                 $rootScope.general = {};

               $rootScope.general = {
                 'nomCommission' : $nomCommission,
                 'idCommission' : $idCommission,
                 'idSeance' : response.id,
                 'date':currentDateHuman
               }
                

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

              $rootScope.general = {
                'nomCommission' : $nomCommission,
                'idCommission' : $idCommission,
                'idSeance':$idSeance,
                'numero':response.numero,
                'invites':mesInvites,
                'date':dateHuman
              }

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

      //*******************************************//
      // FONCTIONS
      //*******************************************//

      var convertMysqlDateToHumanDate = function(usDate) {
        var dateParts = usDate.split(/(\d{4})\-(\d{1,2})\-(\d{1,2})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }



});
