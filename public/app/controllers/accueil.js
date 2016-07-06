app.controller('accueilController', function($scope, $http, API_URL,$rootScope,$filter) {


  $(document).ready(function() {

      // page is now ready, initialize the calendar...

      $('#calendar').fullCalendar({
          // put your options and callbacks here
          lang:"fr",
          height:'auto'
      })

  });
      //*******************************************//
      // EVENEMENTS
      //*******************************************//


      $scope.convertPv = function($pvToken){

        //$('#liste').hide();
        //$('#workflow').show();
        //$('div#menu a').show();

        var mesPv = $rootScope.mesPv;
        angular.forEach(mesPv, function(monPv, key) {
            if(monPv.token == $pvToken){
              $rootScope.pv = monPv;
            }


        });

        var pvNumero = $rootScope.pv.numero;
        console.log(pvNumero)
        $('#word-document').html('<h1>'+pvNumero+'</h1>');
        //$('#word-document').html(pvNumero);

        $('#word-document').wordExport();




      }

      $scope.nouveauPV = function(){

          $('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();


          var pvToken = token();
          //console.log(pvToken)
          $rootScope.pv = {}
          $rootScope.pv.token = pvToken;







/*
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
                 $rootScope.meta = {};
               $rootScope.general = {
                 'date':currentDateHuman
               }
               $rootScope.meta = {
                 'nomCommission' : $nomCommission,
                 'idCommission' : $idCommission,
                 'idSeance' : response.id

               }

           });

*/


      }




      $scope.editPv = function($pvToken){

        $('#liste').hide();
        $('#workflow').show();
        $('div#menu a').show();

        var mesPv = $rootScope.mesPv;
        angular.forEach(mesPv, function(monPv, key) {
            if(monPv.token == $pvToken){
              $rootScope.pv = monPv;

            }


        });
      }

        $scope.soumettrePv = function($pvToken){

          /*$('#liste').hide();
          $('#workflow').show();
          $('div#menu a').show();*/

          var mesPv = $rootScope.mesPv;
          angular.forEach(mesPv, function(monPv, key) {
              if(monPv.token == $pvToken){
                $rootScope.pv = monPv;
                if(navigator.onLine){
                  $rootScope.sauvegarderSeance();
                  UIkit.notify({
                      message : '<i class=\'uk-icon-check\'></i>&nbsp;PV soumis!',
                      status  : 'success',
                      timeout : 3000,
                      pos     : 'top-right'
                  });

                }else{
                  UIkit.notify({
                      message : '<i class=\'uk-icon-close\'></i>&nbsp;Il faut être connecté à Internet.',
                      status  : 'danger',
                      timeout : 3000,
                      pos     : 'top-right'
                  });
                }



              }


          });


        }





        //console.log($idSeance)
/*
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
                'numero':response.numero,
                'invites':mesInvites,
                'date':dateHuman
              }
              $rootScope.meta = {
                'nomCommission' : $nomCommission,
                'idCommission' : $idCommission,
                'idSeance':$idSeance

              }

         });

         $http({
           url: API_URL + "seance/"+$idSeance+"/rubriques",
           method: "GET"
           //params: {'commission_id': $idCommission}
          })
          .success(function(response) {

            $rootScope.rubriques = response;

          });
*/


      //}


      $scope.deletePv = function($pvToken){

        UIkit.modal.confirm("Êtes-vous sûr de vouloir supprimer ce PV?", function(){
            // will be executed on confirm.
            //console.log($rootScope.mesPv)
            var mesPv = $rootScope.mesPv;
            angular.forEach(mesPv, function(monPv, key) {
                if(monPv.token == $pvToken){
                  mesPv.splice(key,1)
                  localStorage.setItem('mesPv', JSON.stringify(mesPv));
                  //$rootScope.refreshSeance();
                  //$apply();
                  $rootScope.mesPv = mesPv;
                  $rootScope.$apply();

                  UIkit.notify({
                      message : '<i class=\'uk-icon-check\'></i>&nbsp;PV supprimé!',
                      status  : 'success',
                      timeout : 3000,
                      pos     : 'top-right'
                  });
                }else{
                  console.log("probleme")
                }


            });


            /*$rootScope.general=JSON.parse(localStorage.getItem('seance'));
            console.log($rootScope.general)
            $rootScope.general.invites=JSON.parse(localStorage.getItem('invites'));
            $rootScope.rubriques=JSON.parse(localStorage.getItem('rubriques'));




            $rootScope.$apply()*/
          //  $apply();

        });

        //console.log($idSeance)

        /*$http({
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


         });*/


      }

      //*******************************************//
      // FONCTIONS
      //*******************************************//

      var convertMysqlDateToHumanDate = function(usDate) {
        var dateParts = usDate.split(/(\d{4})\-(\d{1,2})\-(\d{1,2})/);
        return dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
      }
      var rand = function() {
          return Math.random().toString(36).substr(2); // remove `0.`
      };

      var token = function() {
          return rand() + rand(); // to make it longer
      };





});
